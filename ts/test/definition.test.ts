import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "ability",
    "accessor": "Ability",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/ability/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ability",
    "accessor": "Ability",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/ability/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "is_main_series": true,
      "generation": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "effect_entries": [
        {
          "effect": "x",
          "short_effect": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "effect_changes": [
        {
          "version_group": {
            "name": "x",
            "url": "x"
          },
          "effect_entries": [
            {
              "effect": "x",
              "language": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ],
      "flavor_text_entries": [
        {
          "flavor_text": "x",
          "language": {
            "name": "x",
            "url": "x"
          },
          "version_group": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon": [
        {
          "is_hidden": true,
          "slot": 1,
          "pokemon": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "berry",
    "accessor": "Berry",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/berry/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "berry",
    "accessor": "Berry",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/berry/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "growth_time": 1,
      "max_harvest": 1,
      "natural_gift_power": 1,
      "size": 1,
      "smoothness": 1,
      "soil_dryness": 1,
      "firmness": {
        "name": "x",
        "url": "x"
      },
      "flavors": [
        {
          "potency": 1,
          "flavor": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "item": {
        "name": "x",
        "url": "x"
      },
      "natural_gift_type": {
        "name": "x",
        "url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "berry_firmness",
    "accessor": "BerryFirmness",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/berry-firmness/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "berry_firmness",
    "accessor": "BerryFirmness",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/berry-firmness/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "berries": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "berry_flavor",
    "accessor": "BerryFlavor",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/berry-flavor/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "berry_flavor",
    "accessor": "BerryFlavor",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/berry-flavor/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "berries": [
        {
          "potency": 1,
          "berry": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "contest_type": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "characteristic",
    "accessor": "Characteristic",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/characteristic/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "characteristic",
    "accessor": "Characteristic",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/characteristic/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "gene_modulo": 1,
      "possible_values": [
        1
      ],
      "highest_stat": {
        "name": "x",
        "url": "x"
      },
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contest_effect",
    "accessor": "ContestEffect",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/contest-effect/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contest_effect",
    "accessor": "ContestEffect",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/contest-effect/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "appeal": 1,
      "jam": 1,
      "effect_entries": [
        {
          "effect": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "flavor_text_entries": [
        {
          "flavor_text": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contest_type",
    "accessor": "ContestType",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/contest-type/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contest_type",
    "accessor": "ContestType",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/contest-type/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "berry_flavor": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "color": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "currency",
    "accessor": "Currency",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/currency/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "currency",
    "accessor": "Currency",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/currency/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "egg_group",
    "accessor": "EggGroup",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/egg-group/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "egg_group",
    "accessor": "EggGroup",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/egg-group/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_condition",
    "accessor": "EncounterCondition",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/encounter-condition/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_condition",
    "accessor": "EncounterCondition",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/encounter-condition/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "values": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_condition_value",
    "accessor": "EncounterConditionValue",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/encounter-condition-value/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_condition_value",
    "accessor": "EncounterConditionValue",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/encounter-condition-value/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "condition": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_method",
    "accessor": "EncounterMethod",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/encounter-method/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "encounter_method",
    "accessor": "EncounterMethod",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/encounter-method/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "evolution_chain",
    "accessor": "EvolutionChain",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/evolution-chain/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "evolution_chain",
    "accessor": "EvolutionChain",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/evolution-chain/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "baby_trigger_item": {
        "name": "x",
        "url": "x"
      },
      "chain": {
        "is_baby": true,
        "species": {
          "name": "x",
          "url": "x"
        },
        "evolution_details": [
          {
            "version_group": {
              "name": "x",
              "url": "x"
            },
            "is_default": true,
            "item": {
              "name": "x",
              "url": "x"
            },
            "trigger": {
              "name": "x",
              "url": "x"
            },
            "gender": 1,
            "held_item": {
              "name": "x",
              "url": "x"
            },
            "known_move": {
              "name": "x",
              "url": "x"
            },
            "known_move_type": {
              "name": "x",
              "url": "x"
            },
            "location": {
              "name": "x",
              "url": "x"
            },
            "min_level": 1,
            "min_happiness": 1,
            "min_beauty": 1,
            "min_affection": 1,
            "near_special_rock": true,
            "needs_multiplayer": true,
            "needs_overworld_rain": true,
            "party_species": {
              "name": "x",
              "url": "x"
            },
            "party_type": {
              "name": "x",
              "url": "x"
            },
            "relative_physical_stats": 1,
            "time_of_day": "x",
            "trade_species": {
              "name": "x",
              "url": "x"
            },
            "turn_upside_down": true,
            "region": {
              "name": "x",
              "url": "x"
            },
            "required_pokemon_form": {
              "name": "x",
              "url": "x"
            },
            "evolved_pokemon_form": {
              "name": "x",
              "url": "x"
            },
            "used_move": {
              "name": "x",
              "url": "x"
            },
            "min_move_count": 1,
            "min_steps": 1,
            "min_damage_taken": 1,
            "allowed_natures": [
              {}
            ],
            "condition_expression": {}
          }
        ],
        "evolves_to": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "evolution_trigger",
    "accessor": "EvolutionTrigger",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/evolution-trigger/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "evolution_trigger",
    "accessor": "EvolutionTrigger",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/evolution-trigger/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "evolution_variable",
    "accessor": "EvolutionVariable",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/evolution-variable/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "evolution_variable",
    "accessor": "EvolutionVariable",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/evolution-variable/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "symbol": "x",
      "data_type": "x",
      "source": "x",
      "version_group": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "gender",
    "accessor": "Gender",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/gender/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "gender",
    "accessor": "Gender",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/gender/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "pokemon_species_details": [
        {
          "rate": 1,
          "pokemon_species": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "required_for_evolution": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "generation",
    "accessor": "Generation",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/generation/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "generation",
    "accessor": "Generation",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/generation/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "abilities": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "main_region": {
        "name": "x",
        "url": "x"
      },
      "moves": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "types": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "version_groups": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "growth_rate",
    "accessor": "GrowthRate",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/growth-rate/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "growth_rate",
    "accessor": "GrowthRate",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/growth-rate/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "formula": "x",
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "levels": [
        {
          "level": 1,
          "experience": 1
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item",
    "accessor": "Item",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/item/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item",
    "accessor": "Item",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/item/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "fling_power": 1,
      "fling_effect": {
        "name": "x",
        "url": "x"
      },
      "attributes": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "category": {
        "name": "x",
        "url": "x"
      },
      "effect_entries": [
        {
          "effect": "x",
          "short_effect": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "flavor_text_entries": [
        {
          "text": "x",
          "version_group": {
            "name": "x",
            "url": "x"
          },
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "game_indices": [
        {
          "game_index": 1,
          "generation": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "prices": [
        {
          "purchase_price": 1,
          "sell_price": 1,
          "currency": {
            "name": "x",
            "url": "x"
          },
          "version_group": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "held_by_pokemon": [
        {
          "pokemon": {
            "name": "x",
            "url": "x"
          },
          "version_details": [
            {
              "rarity": 1,
              "version": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ],
      "sprites": {
        "default": "x"
      },
      "baby_trigger_for": {
        "url": "x"
      },
      "machines": [
        {
          "machine": {
            "url": "x"
          },
          "version_group": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_attribute",
    "accessor": "ItemAttribute",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/item-attribute/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_attribute",
    "accessor": "ItemAttribute",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/item-attribute/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "items": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_category",
    "accessor": "ItemCategory",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/item-category/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_category",
    "accessor": "ItemCategory",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/item-category/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "items": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pocket": {
        "name": "x",
        "url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "item_fling_effect",
    "accessor": "ItemFlingEffect",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/item-fling-effect/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_fling_effect",
    "accessor": "ItemFlingEffect",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/item-fling-effect/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "effect_entries": [
        {
          "effect": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "items": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_pocket",
    "accessor": "ItemPocket",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/item-pocket/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "item_pocket",
    "accessor": "ItemPocket",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/item-pocket/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "categories": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "language",
    "accessor": "Language",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/language/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "language",
    "accessor": "Language",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/language/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "official": true,
      "iso639": "x",
      "iso3166": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/location/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/location/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "region": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "game_indices": [
        {
          "game_index": 1,
          "generation": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "areas": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location_area",
    "accessor": "LocationArea",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/location-area/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location_area",
    "accessor": "LocationArea",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/location-area/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "game_index": 1,
      "encounter_method_rates": [
        {
          "encounter_method": {
            "name": "x",
            "url": "x"
          },
          "version_details": [
            {
              "rate": 1,
              "version": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ],
      "location": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_encounters": [
        {
          "pokemon": {
            "name": "x",
            "url": "x"
          },
          "version_details": [
            {
              "version": {
                "name": "x",
                "url": "x"
              },
              "max_chance": 1,
              "encounter_details": [
                {}
              ]
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "machine",
    "accessor": "Machine",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/machine/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "machine",
    "accessor": "Machine",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/machine/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "item": {
        "name": "x",
        "url": "x"
      },
      "version_group": {
        "name": "x",
        "url": "x"
      },
      "move": {
        "name": "x",
        "url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "move_battle_style",
    "accessor": "MoveBattleStyle",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/move-battle-style/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_battle_style",
    "accessor": "MoveBattleStyle",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/move-battle-style/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_damage_class",
    "accessor": "MoveDamageClass",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/move-damage-class/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_damage_class",
    "accessor": "MoveDamageClass",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/move-damage-class/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "moves": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_learn_method",
    "accessor": "MoveLearnMethod",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/move-learn-method/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_learn_method",
    "accessor": "MoveLearnMethod",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/move-learn-method/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "version_groups": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_target",
    "accessor": "MoveTarget",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/move-target/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "move_target",
    "accessor": "MoveTarget",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/move-target/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "moves": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "nature",
    "accessor": "Nature",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/nature/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "nature",
    "accessor": "Nature",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/nature/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "decreased_stat": {
        "name": "x",
        "url": "x"
      },
      "increased_stat": {
        "name": "x",
        "url": "x"
      },
      "likes_flavor": {
        "name": "x",
        "url": "x"
      },
      "hates_flavor": {
        "name": "x",
        "url": "x"
      },
      "berries": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "pokeathlon_stat_changes": [
        {
          "max_change": 1,
          "pokeathlon_stat": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "move_battle_style_preferences": [
        {
          "low_hp_preference": 1,
          "high_hp_preference": 1,
          "move_battle_style": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pal_park_area",
    "accessor": "PalParkArea",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pal-park-area/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pal_park_area",
    "accessor": "PalParkArea",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pal-park-area/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_encounters": [
        {
          "base_score": 1,
          "rate": 1,
          "pokemon_species": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokeathlon_stat",
    "accessor": "PokeathlonStat",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokeathlon-stat/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokeathlon_stat",
    "accessor": "PokeathlonStat",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokeathlon-stat/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "affecting_natures": {
        "increase": [
          {
            "max_change": 1,
            "nature": {
              "name": "x",
              "url": "x"
            }
          }
        ],
        "decrease": [
          {
            "max_change": 1,
            "nature": {
              "name": "x",
              "url": "x"
            }
          }
        ]
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokedex",
    "accessor": "Pokedex",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokedex/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokedex",
    "accessor": "Pokedex",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokedex/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "is_main_series": true,
      "descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_entries": [
        {
          "entry_number": 1,
          "pokemon_species": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "region": {
        "name": "x",
        "url": "x"
      },
      "version_groups": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon",
    "accessor": "Pokemon",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon",
    "accessor": "Pokemon",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "base_experience": 1,
      "height": 1,
      "is_default": true,
      "order": 1,
      "weight": 1,
      "abilities": [
        {
          "is_hidden": true,
          "slot": 1,
          "ability": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "past_abilities": [
        {
          "abilities": [
            {
              "is_hidden": true,
              "slot": 1,
              "ability": {
                "name": "x",
                "url": "x"
              }
            }
          ],
          "generation": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "forms": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "game_indices": [
        {
          "game_index": 1,
          "version": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "held_items": [
        {
          "pokemon": {
            "name": "x",
            "url": "x"
          },
          "version_details": [
            {
              "rarity": 1,
              "version": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ],
      "location_area_encounters": "x",
      "moves": [
        {
          "move": {
            "name": "x",
            "url": "x"
          },
          "version_group_details": [
            {
              "level_learned_at": 1,
              "move_learn_method": {
                "name": "x",
                "url": "x"
              },
              "version_group": {
                "name": "x",
                "url": "x"
              },
              "order": 1
            }
          ]
        }
      ],
      "species": {
        "name": "x",
        "url": "x"
      },
      "sprites": {
        "front_default": "x"
      },
      "cries": {
        "latest": "x",
        "legacy": "x"
      },
      "stats": [
        {
          "base_stat": 1,
          "effort": 1,
          "stat": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "past_stats": [
        {
          "generation": {
            "name": "x",
            "url": "x"
          },
          "stats": [
            {
              "base_stat": 1,
              "effort": 1,
              "stat": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "past_types": [
        {
          "generation": {
            "name": "x",
            "url": "x"
          },
          "types": [
            {
              "slot": 1,
              "pokemon": {
                "name": "x",
                "url": "x"
              }
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_color",
    "accessor": "PokemonColor",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon-color/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_color",
    "accessor": "PokemonColor",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon-color/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_encounter",
    "accessor": "PokemonEncounter",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon/{pokemon_id}/encounters",
    "args": [
      {
        "name": "id",
        "wire": "pokemon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "location_area": {
          "name": "x",
          "url": "x"
        },
        "version_details": [
          {
            "version": {
              "name": "x",
              "url": "x"
            },
            "max_chance": 1,
            "encounter_details": [
              {
                "chance": 1,
                "condition_values": [],
                "max_level": 1,
                "method": {},
                "min_level": 1
              }
            ]
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "pokemon_form",
    "accessor": "PokemonForm",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon-form/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_form",
    "accessor": "PokemonForm",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon-form/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "form_order": 1,
      "is_default": true,
      "is_battle_only": true,
      "is_mega": true,
      "form_name": "x",
      "pokemon": {
        "name": "x",
        "url": "x"
      },
      "sprites": {},
      "version_group": {
        "name": "x",
        "url": "x"
      },
      "form_names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "trigger_conditions": [
        {
          "trigger": "x",
          "base_form": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "flavor_text_entries": [
        {
          "flavor_text": "x",
          "language": {
            "name": "x",
            "url": "x"
          },
          "version": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_habitat",
    "accessor": "PokemonHabitat",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon-habitat/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_habitat",
    "accessor": "PokemonHabitat",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon-habitat/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_shape",
    "accessor": "PokemonShape",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon-shape/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_shape",
    "accessor": "PokemonShape",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon-shape/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "awesome_names": [
        {
          "awesome_name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon_species": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_species",
    "accessor": "PokemonSpecies",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/pokemon-species/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pokemon_species",
    "accessor": "PokemonSpecies",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/pokemon-species/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "gender_rate": 1,
      "capture_rate": 1,
      "base_happiness": 1,
      "is_baby": true,
      "is_legendary": true,
      "is_mythical": true,
      "hatch_counter": 1,
      "has_gender_differences": true,
      "forms_switchable": true,
      "growth_rate": {
        "name": "x",
        "url": "x"
      },
      "pokedex_numbers": [
        {
          "entry_number": 1,
          "pokedex": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "egg_groups": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "color": {
        "name": "x",
        "url": "x"
      },
      "shape": {
        "name": "x",
        "url": "x"
      },
      "evolves_from_species": {
        "name": "x",
        "url": "x"
      },
      "evolution_chain": {
        "url": "x"
      },
      "habitat": {
        "name": "x",
        "url": "x"
      },
      "generation": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pal_park_encounters": [
        {
          "base_score": 1,
          "rate": 1,
          "area": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "form_descriptions": [
        {
          "description": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "flavor_text_entries": [
        {
          "flavor_text": "x",
          "language": {
            "name": "x",
            "url": "x"
          },
          "version": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "genera": [
        {
          "genus": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "varieties": [
        {
          "is_default": true,
          "pokemon": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "region",
    "accessor": "Region",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/region/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "region",
    "accessor": "Region",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/region/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "locations": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "main_generation": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokedexes": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "version_groups": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stat",
    "accessor": "Stat",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/stat/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stat",
    "accessor": "Stat",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/stat/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "game_index": 1,
      "is_battle_only": true,
      "affecting_moves": {
        "increase": [
          {
            "change": 1,
            "move": {
              "name": "x",
              "url": "x"
            }
          }
        ],
        "decrease": [
          {
            "change": 1,
            "move": {
              "name": "x",
              "url": "x"
            }
          }
        ]
      },
      "affecting_natures": {
        "increase": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "decrease": [
          {
            "name": "x",
            "url": "x"
          }
        ]
      },
      "affecting_items": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "characteristics": [
        {
          "url": "x"
        }
      ],
      "move_damage_class": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "super_contest_effect",
    "accessor": "SuperContestEffect",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/super-contest-effect/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "super_contest_effect",
    "accessor": "SuperContestEffect",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/super-contest-effect/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "appeal": 1,
      "flavor_text_entries": [
        {
          "flavor_text": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "moves": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/type/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/type/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "damage_relations": {
        "no_damage_to": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "half_damage_to": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "double_damage_to": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "no_damage_from": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "half_damage_from": [
          {
            "name": "x",
            "url": "x"
          }
        ],
        "double_damage_from": [
          {
            "name": "x",
            "url": "x"
          }
        ]
      },
      "past_damage_relations": [
        {
          "generation": {
            "name": "x",
            "url": "x"
          },
          "damage_relations": {
            "no_damage_to": [
              {
                "name": "x",
                "url": "x"
              }
            ],
            "half_damage_to": [
              {
                "name": "x",
                "url": "x"
              }
            ],
            "double_damage_to": [
              {
                "name": "x",
                "url": "x"
              }
            ],
            "no_damage_from": [
              {
                "name": "x",
                "url": "x"
              }
            ],
            "half_damage_from": [
              {
                "name": "x",
                "url": "x"
              }
            ],
            "double_damage_from": [
              {
                "name": "x",
                "url": "x"
              }
            ]
          }
        }
      ],
      "game_indices": [
        {
          "game_index": 1,
          "generation": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "generation": {
        "name": "x",
        "url": "x"
      },
      "move_damage_class": {
        "name": "x",
        "url": "x"
      },
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "pokemon": [
        {
          "slot": 1,
          "pokemon": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "moves": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "sprites": {}
    },
    "idField": "id"
  },
  {
    "entity": "utility",
    "accessor": "Utility",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/meta/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "deploy_date": "x",
      "hash": "x",
      "tag": "x"
    },
    "idField": "id"
  },
  {
    "entity": "version",
    "accessor": "Version",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/version/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "version",
    "accessor": "Version",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/version/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "names": [
        {
          "name": "x",
          "language": {
            "name": "x",
            "url": "x"
          }
        }
      ],
      "version_group": {
        "name": "x",
        "url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "version_group",
    "accessor": "VersionGroup",
    "op": "list",
    "method": "GET",
    "path": "/api/v2/version-group/",
    "args": [],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "q"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "version_group",
    "accessor": "VersionGroup",
    "op": "load",
    "method": "GET",
    "path": "/api/v2/version-group/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "generation": {
        "name": "x",
        "url": "x"
      },
      "move_learn_methods": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "pokedexes": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "regions": [
        {
          "name": "x",
          "url": "x"
        }
      ],
      "versions": [
        {
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
