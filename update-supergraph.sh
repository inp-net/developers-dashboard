 bun mesh-compose > supergraph.graphql
 echo ' scalar ResolveToSourceArgs
          directive @resolveTo(
            requiredSelectionSet: String
            sourceName: String
            sourceTypeName: String
            sourceFieldName: String
            sourceSelectionSet: String
            sourceArgs: ResolveToSourceArgs
            keyField: String
            keysArg: String
            pubsubTopic: String
            filterBy: String
            additionalArgs: ResolveToSourceArgs
            result: String
            resultType: String
          ) on FIELD_DEFINITION' >> supergraph.graphql
