import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} from 'graphql'

let count = 0

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'NotRootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'The count!',
        resolve: () => {
          return count
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'StillNotRoot',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Update the count',
        resolve: () => {
          count += 1
          return count
        }
      }
    }
  })
})

let ItemType = new GraphQLObjectType({
  name: 'item',
  description: 'item',
  fields: {
    id: {
      type: GraphQLString,
      description: 'item id'
    },
    title: {
      type: GraphQLString,
      description: 'item title'
    },
    price: {
      type: GraphQLString,
      description: 'item price',
      resolve: (root, param, context) => {
        return (root / 100).toFixed(2)
      }
    },
    pic: {
      type: GraphQLString,
      description: 'item pic url'
    }
  }
})

let ItemSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'ItemQuery',
    description: 'query item',
    fields: {
      item: {
        type: ItemType,
        description: 'item',
        args: {
          id: {
            type: GraphQLInt,
            required: true
          }
        },
        resolve: (root, obj, ctx) => {
          // return yield ItemService(obj['id'])
          console.log('resolve')
        }
      }
    }
  })
})
export default ItemSchema