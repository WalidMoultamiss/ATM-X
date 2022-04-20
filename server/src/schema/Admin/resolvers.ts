import type { Resolvers } from '@generated/types';
import { User, IUser } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    getUsers: async () => {
      const users: IUser[] = await User.find();
      return users;
    },
    countUsers: async () => {
      const count = await User.countDocuments();
      return count;
    },
    countUsersByDay: async () => {
      const count = await User.aggregate([
        {
          $group: {
            _id: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: '$createdAt',
              },
            },
            count: { $sum: 1 },
          },
        },
      ]);
      return count;
    },
  },
};
