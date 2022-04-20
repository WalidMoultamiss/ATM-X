import type { Resolvers } from "@generated/types";
import { generateJWT } from "@lib/jwt";
import { User, IUser } from "@models/index";
import { AuthenticationError } from "apollo-server-core";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const resolvers: Resolvers = {
  Query: {
    Users: async (_, __) => {
      return await User.find();
    },
    //@ts-ignore
    User: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    //@ts-ignore
    createUser: async (_: any, { input }: { input: IUser }): Promise<IUser> => {
      const { name, visa, code, balance } = input;
      const hashedPassword = await hash(code, 10);

      const user = new User({
        name,
        visa,
        code: hashedPassword,
        balance,
      });
      const token = sign({ userId: user.id }, "secret", {
        expiresIn: "1y",
      });
      user.token = token;

      let AyoCheck = await user.save();
      return user;
    },
    //@ts-ignore
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
    deleteAllUsers: async () => {
      await User.deleteMany({});
      return "All users deleted 😐";
    },
    //@ts-ignore
    updateUser: async (_, { id, input }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      return user;
    },
    //@ts-ignore
    updateBalance: async (_, { id, input }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      return user;
    },
    //@ts-ignore
    login: async (_: any, { input }: { input: IUser }): Promise<IUser | string> => {
      const { visa, code } = input;
      const user = await User.findOne({ visa });
      if (!user) {
        return "User not found"
      }

      const isValid = await compare(code!, user.code);
      if (!isValid) {
        return "User not found"
      }

      const token = sign({ userId: user.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      user.token = token;
      return user;
    },
  },
};
