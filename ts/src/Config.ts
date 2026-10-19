
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'PokeapiSdk',
        slug: "pokeapi-sdk",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://pokeapi.co",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        ability: {
        },
  
        berry: {
        },
  
        berry_firmness: {
        },
  
        berry_flavor: {
        },
  
        characteristic: {
        },
  
        contest_effect: {
        },
  
        contest_type: {
        },
  
        currency: {
        },
  
        egg_group: {
        },
  
        encounter_condition: {
        },
  
        encounter_condition_value: {
        },
  
        encounter_method: {
        },
  
        evolution_chain: {
        },
  
        evolution_trigger: {
        },
  
        evolution_variable: {
        },
  
        gender: {
        },
  
        generation: {
        },
  
        growth_rate: {
        },
  
        item: {
        },
  
        item_attribute: {
        },
  
        item_category: {
        },
  
        item_fling_effect: {
        },
  
        item_pocket: {
        },
  
        language: {
        },
  
        location: {
        },
  
        location_area: {
        },
  
        machine: {
        },
  
        move: {
        },
  
        move_battle_style: {
        },
  
        move_damage_class: {
        },
  
        move_learn_method: {
        },
  
        move_target: {
        },
  
        nature: {
        },
  
        pal_park_area: {
        },
  
        pokeathlon_stat: {
        },
  
        pokedex: {
        },
  
        pokemon: {
        },
  
        pokemon_color: {
        },
  
        pokemon_encounter: {
        },
  
        pokemon_form: {
        },
  
        pokemon_habitat: {
        },
  
        pokemon_shape: {
        },
  
        pokemon_species: {
        },
  
        region: {
        },
  
        stat: {
        },
  
        super_contest_effect: {
        },
  
        type: {
        },
  
        utility: {
        },
  
        version: {
        },
  
        version_group: {
        },
  
    }
  }


  entity = {
    "ability": {
      "fields": [
        {
          "name": "effect_changes",
          "title": "Effect Changes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "effect_entries",
          "title": "Effect Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "generation",
          "title": "Generation",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_main_series",
          "title": "Is Main Series",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon",
          "title": "Pokemon",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ability",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/ability/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "ability"
                }
              ],
              "parts": [
                "api",
                "v2",
                "ability"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/ability/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "ability"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "ability",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "berry": {
      "fields": [
        {
          "name": "firmness",
          "title": "Firmness",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "flavors",
          "title": "Flavors",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "growth_time",
          "title": "Growth Time",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "item",
          "title": "Item",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "max_harvest",
          "title": "Max Harvest",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "natural_gift_power",
          "title": "Natural Gift Power",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "natural_gift_type",
          "title": "Natural Gift Type",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "size",
          "title": "Size",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "smoothness",
          "title": "Smoothness",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "soil_dryness",
          "title": "Soil Dryness",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "berry",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "berry_firmness": {
      "fields": [
        {
          "name": "berries",
          "title": "Berries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "berry_firmness",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry-firmness/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry-firmness"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry-firmness"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry-firmness/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry-firmness"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry-firmness",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "berry_flavor": {
      "fields": [
        {
          "name": "berries",
          "title": "Berries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "contest_type",
          "title": "Contest Type",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "berry_flavor",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry-flavor/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry-flavor"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry-flavor"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/berry-flavor/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "berry-flavor"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "berry-flavor",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "characteristic": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "gene_modulo",
          "title": "Gene Modulo",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "highest_stat",
          "title": "Highest Stat",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "possible_values",
          "title": "Possible Values",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "characteristic",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/characteristic/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "characteristic"
                }
              ],
              "parts": [
                "api",
                "v2",
                "characteristic"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/characteristic/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "characteristic"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "characteristic",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contest_effect": {
      "fields": [
        {
          "name": "appeal",
          "title": "Appeal",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "effect_entries",
          "title": "Effect Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "jam",
          "title": "Jam",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contest_effect",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/contest-effect/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "contest-effect"
                }
              ],
              "parts": [
                "api",
                "v2",
                "contest-effect"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/contest-effect/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "contest-effect"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "contest-effect",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contest_type": {
      "fields": [
        {
          "name": "berry_flavor",
          "title": "Berry Flavor",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contest_type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/contest-type/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "contest-type"
                }
              ],
              "parts": [
                "api",
                "v2",
                "contest-type"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/contest-type/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "contest-type"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "contest-type",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "currency": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "currency",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/currency/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "currency"
                }
              ],
              "parts": [
                "api",
                "v2",
                "currency"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/currency/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "currency"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "currency",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "egg_group": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "egg_group",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/egg-group/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "egg-group"
                }
              ],
              "parts": [
                "api",
                "v2",
                "egg-group"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/egg-group/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "egg-group"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "egg-group",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "encounter_condition": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "values",
          "title": "Values",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "encounter_condition",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-condition/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-condition"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-condition"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-condition/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-condition"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-condition",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "encounter_condition_value": {
      "fields": [
        {
          "name": "condition",
          "title": "Condition",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "encounter_condition_value",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-condition-value/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-condition-value"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-condition-value"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-condition-value/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-condition-value"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-condition-value",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "encounter_method": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "order",
          "title": "Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "encounter_method",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-method/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-method"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-method"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/encounter-method/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "encounter-method"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "encounter-method",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "evolution_chain": {
      "fields": [
        {
          "name": "baby_trigger_item",
          "title": "Baby Trigger Item",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "chain",
          "title": "Chain",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "evolution_chain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-chain/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-chain"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-chain"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-chain/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-chain"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-chain",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "evolution_trigger": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "evolution_trigger",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-trigger/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-trigger"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-trigger"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-trigger/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-trigger"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-trigger",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "evolution_variable": {
      "fields": [
        {
          "name": "data_type",
          "title": "Data Type",
          "type": "`$STRING`"
        },
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "short": "Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g."
        },
        {
          "name": "symbol",
          "title": "Symbol",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_group",
          "title": "Version Group",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "evolution_variable",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-variable/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-variable"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-variable"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/evolution-variable/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "evolution-variable"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "evolution-variable",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "gender": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "pokemon_species_details",
          "title": "Pokemon Species Details",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "required_for_evolution",
          "title": "Required For Evolution",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "gender",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/gender/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "gender"
                }
              ],
              "parts": [
                "api",
                "v2",
                "gender"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/gender/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "gender"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "gender",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generation": {
      "fields": [
        {
          "name": "abilities",
          "title": "Abilities",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "main_region",
          "title": "Main Region",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "types",
          "title": "Types",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_groups",
          "title": "Version Groups",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "generation",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/generation/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "generation"
                }
              ],
              "parts": [
                "api",
                "v2",
                "generation"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/generation/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "generation"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "generation",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "growth_rate": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "formula",
          "title": "Formula",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "levels",
          "title": "Levels",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "growth_rate",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/growth-rate/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "growth-rate"
                }
              ],
              "parts": [
                "api",
                "v2",
                "growth-rate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/growth-rate/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "growth-rate"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "growth-rate",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "item": {
      "fields": [
        {
          "name": "attributes",
          "title": "Attributes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "baby_trigger_for",
          "title": "Baby Trigger For",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "category",
          "title": "Category",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "effect_entries",
          "title": "Effect Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "fling_effect",
          "title": "Fling Effect",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "fling_power",
          "title": "Fling Power",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "game_indices",
          "title": "Game Indices",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "held_by_pokemon",
          "title": "Held By Pokemon",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "machines",
          "title": "Machines",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "prices",
          "title": "Prices",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "sprites",
          "title": "Sprites",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "item_attribute": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item_attribute",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-attribute/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-attribute"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-attribute"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-attribute/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-attribute"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-attribute",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "item_category": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pocket",
          "title": "Pocket",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item_category",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-category/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-category"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-category"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-category/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-category"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-category",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "item_fling_effect": {
      "fields": [
        {
          "name": "effect_entries",
          "title": "Effect Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item_fling_effect",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-fling-effect/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-fling-effect"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-fling-effect"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-fling-effect/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-fling-effect"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-fling-effect",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "item_pocket": {
      "fields": [
        {
          "name": "categories",
          "title": "Categories",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item_pocket",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-pocket/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-pocket"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-pocket"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/item-pocket/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "item-pocket"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "item-pocket",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "language": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "iso3166",
          "title": "Iso3166",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "iso639",
          "title": "Iso639",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "official",
          "title": "Official",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "language",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/language/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "language"
                }
              ],
              "parts": [
                "api",
                "v2",
                "language"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/language/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "language"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "language",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location": {
      "fields": [
        {
          "name": "areas",
          "title": "Areas",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "game_indices",
          "title": "Game Indices",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "location",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/location/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "location"
                }
              ],
              "parts": [
                "api",
                "v2",
                "location"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/location/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "location"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "location",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location_area": {
      "fields": [
        {
          "name": "encounter_method_rates",
          "title": "Encounter Method Rates",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "game_index",
          "title": "Game Index",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "location",
          "title": "Location",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_encounters",
          "title": "Pokemon Encounters",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "location_area",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/location-area/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "location-area"
                }
              ],
              "parts": [
                "api",
                "v2",
                "location-area"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/location-area/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "location-area"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "location-area",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "machine": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "item",
          "title": "Item",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "move",
          "title": "Move",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_group",
          "title": "Version Group",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "machine",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/machine/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "machine"
                }
              ],
              "parts": [
                "api",
                "v2",
                "machine"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/machine/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "machine"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "machine",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "move": {
      "fields": [
        {
          "name": "accuracy",
          "title": "Accuracy",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "contest_combos",
          "title": "Contest Combos",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "contest_effect",
          "title": "Contest Effect",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "contest_type",
          "title": "Contest Type",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "damage_class",
          "title": "Damage Class",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "effect_chance",
          "title": "Effect Chance",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "effect_changes",
          "title": "Effect Changes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "effect_entries",
          "title": "Effect Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "generation",
          "title": "Generation",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "learned_by_pokemon",
          "title": "Learned By Pokemon",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "machines",
          "title": "Machines",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "meta",
          "title": "Meta",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "past_values",
          "title": "Past Values",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "power",
          "title": "Power",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pp",
          "title": "Pp",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "priority",
          "title": "Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "stat_changes",
          "title": "Stat Changes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "super_contest_effect",
          "title": "Super Contest Effect",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "target",
          "title": "Target",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "move",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-ailment/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-ailment"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-ailment"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-category/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-category"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-category"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-ailment/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-ailment"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-ailment",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-category/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-category"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-category",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "move_battle_style": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "move_battle_style",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-battle-style/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-battle-style"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-battle-style"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-battle-style/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-battle-style"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-battle-style",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "move_damage_class": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "move_damage_class",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-damage-class/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-damage-class"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-damage-class"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-damage-class/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-damage-class"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-damage-class",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "move_learn_method": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_groups",
          "title": "Version Groups",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "move_learn_method",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-learn-method/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-learn-method"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-learn-method"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-learn-method/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-learn-method"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-learn-method",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "move_target": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "move_target",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-target/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-target"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-target"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/move-target/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "move-target"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "move-target",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "nature": {
      "fields": [
        {
          "name": "berries",
          "title": "Berries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "decreased_stat",
          "title": "Decreased Stat",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "hates_flavor",
          "title": "Hates Flavor",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "increased_stat",
          "title": "Increased Stat",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "likes_flavor",
          "title": "Likes Flavor",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "move_battle_style_preferences",
          "title": "Move Battle Style Preferences",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokeathlon_stat_changes",
          "title": "Pokeathlon Stat Changes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "nature",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/nature/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "nature"
                }
              ],
              "parts": [
                "api",
                "v2",
                "nature"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/nature/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "nature"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "nature",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pal_park_area": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_encounters",
          "title": "Pokemon Encounters",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pal_park_area",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pal-park-area/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pal-park-area"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pal-park-area"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pal-park-area/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pal-park-area"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pal-park-area",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokeathlon_stat": {
      "fields": [
        {
          "name": "affecting_natures",
          "title": "Affecting Natures",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokeathlon_stat",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokeathlon-stat/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokeathlon-stat"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokeathlon-stat"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokeathlon-stat/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokeathlon-stat"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokeathlon-stat",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokedex": {
      "fields": [
        {
          "name": "descriptions",
          "title": "Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_main_series",
          "title": "Is Main Series",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_entries",
          "title": "Pokemon Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_groups",
          "title": "Version Groups",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokedex",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokedex/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokedex"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokedex"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokedex/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokedex"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokedex",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon": {
      "fields": [
        {
          "name": "abilities",
          "title": "Abilities",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "base_experience",
          "title": "Base Experience",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "cries",
          "title": "Cries",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "forms",
          "title": "Forms",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "game_indices",
          "title": "Game Indices",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "height",
          "title": "Height",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "held_items",
          "title": "Held Items",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_default",
          "title": "Is Default",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "location_area_encounters",
          "title": "Location Area Encounters",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "order",
          "title": "Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "past_abilities",
          "title": "Past Abilities",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "past_stats",
          "title": "Past Stats",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "past_types",
          "title": "Past Types",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "species",
          "title": "Species",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "sprites",
          "title": "Sprites",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "stats",
          "title": "Stats",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "types",
          "title": "Types",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "weight",
          "title": "Weight",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_color": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_color",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-color/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-color"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-color"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-color/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-color"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-color",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_encounter": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "location_area",
          "title": "Location Area",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "version_details",
          "title": "Version Details",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_encounter",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon/{pokemon_id}/encounters",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "encounters"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon",
                "{id}",
                "encounters"
              ],
              "rename": {
                "param": {
                  "pokemon_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "pokemon_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_form": {
      "fields": [
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "form_name",
          "title": "Form Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "form_names",
          "title": "Form Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "form_order",
          "title": "Form Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_battle_only",
          "title": "Is Battle Only",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_default",
          "title": "Is Default",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_mega",
          "title": "Is Mega",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "order",
          "title": "Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pokemon",
          "title": "Pokemon",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "sprites",
          "title": "Sprites",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "trigger_conditions",
          "title": "Trigger Conditions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "types",
          "title": "Types",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_group",
          "title": "Version Group",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_form",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-form/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-form"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-form"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-form/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-form"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-form",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_habitat": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_habitat",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-habitat/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-habitat"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-habitat"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-habitat/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-habitat"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-habitat",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_shape": {
      "fields": [
        {
          "name": "awesome_names",
          "title": "Awesome Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon_species",
          "title": "Pokemon Species",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_shape",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-shape/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-shape"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-shape"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-shape/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-shape"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-shape",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pokemon_species": {
      "fields": [
        {
          "name": "base_happiness",
          "title": "Base Happiness",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "capture_rate",
          "title": "Capture Rate",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "color",
          "title": "Color",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "egg_groups",
          "title": "Egg Groups",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "evolution_chain",
          "title": "Evolution Chain",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "evolves_from_species",
          "title": "Evolves From Species",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "form_descriptions",
          "title": "Form Descriptions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "forms_switchable",
          "title": "Forms Switchable",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "gender_rate",
          "title": "Gender Rate",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "genera",
          "title": "Genera",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "generation",
          "title": "Generation",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "growth_rate",
          "title": "Growth Rate",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "habitat",
          "title": "Habitat",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "has_gender_differences",
          "title": "Has Gender Differences",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "hatch_counter",
          "title": "Hatch Counter",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_baby",
          "title": "Is Baby",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_legendary",
          "title": "Is Legendary",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_mythical",
          "title": "Is Mythical",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "order",
          "title": "Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pal_park_encounters",
          "title": "Pal Park Encounters",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokedex_numbers",
          "title": "Pokedex Numbers",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "shape",
          "title": "Shape",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "varieties",
          "title": "Varieties",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pokemon_species",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-species/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-species"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-species"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/pokemon-species/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "pokemon-species"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "pokemon-species",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "region": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "locations",
          "title": "Locations",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "main_generation",
          "title": "Main Generation",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokedexes",
          "title": "Pokedexes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_groups",
          "title": "Version Groups",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "region",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/region/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "region"
                }
              ],
              "parts": [
                "api",
                "v2",
                "region"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/region/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "region"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "region",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "stat": {
      "fields": [
        {
          "name": "affecting_items",
          "title": "Affecting Items",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "affecting_moves",
          "title": "Affecting Moves",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "affecting_natures",
          "title": "Affecting Natures",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "characteristics",
          "title": "Characteristics",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "game_index",
          "title": "Game Index",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "is_battle_only",
          "title": "Is Battle Only",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "move_damage_class",
          "title": "Move Damage Class",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "stat",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/stat/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "stat"
                }
              ],
              "parts": [
                "api",
                "v2",
                "stat"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/stat/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "stat"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "stat",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "super_contest_effect": {
      "fields": [
        {
          "name": "appeal",
          "title": "Appeal",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "flavor_text_entries",
          "title": "Flavor Text Entries",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "super_contest_effect",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/super-contest-effect/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "super-contest-effect"
                }
              ],
              "parts": [
                "api",
                "v2",
                "super-contest-effect"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/super-contest-effect/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "super-contest-effect"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "super-contest-effect",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "type": {
      "fields": [
        {
          "name": "damage_relations",
          "title": "Damage Relations",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "game_indices",
          "title": "Game Indices",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "generation",
          "title": "Generation",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "move_damage_class",
          "title": "Move Damage Class",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "moves",
          "title": "Moves",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "past_damage_relations",
          "title": "Past Damage Relations",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "pokemon",
          "title": "Pokemon",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "sprites",
          "title": "Sprites",
          "type": "`$ANY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/type/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "type"
                }
              ],
              "parts": [
                "api",
                "v2",
                "type"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/type/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "type"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "type",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "utility": {
      "fields": [
        {
          "name": "deploy_date",
          "title": "Deploy Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "hash",
          "title": "Hash",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "tag",
          "title": "Tag",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        }
      ],
      "name": "utility",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/meta/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "meta"
                }
              ],
              "parts": [
                "api",
                "v2",
                "meta"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "version": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "names",
          "title": "Names",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "version_group",
          "title": "Version Group",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "version",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/version/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "version"
                }
              ],
              "parts": [
                "api",
                "v2",
                "version"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/version/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "version"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "version",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "version_group": {
      "fields": [
        {
          "name": "generation",
          "title": "Generation",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "move_learn_methods",
          "title": "Move Learn Methods",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "order",
          "title": "Order",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pokedexes",
          "title": "Pokedexes",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "regions",
          "title": "Regions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "uri"
        },
        {
          "name": "versions",
          "title": "Versions",
          "type": "`$ARRAY`",
          "req": true,
          "readOnly": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "version_group",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/version-group/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "version-group"
                }
              ],
              "parts": [
                "api",
                "v2",
                "version-group"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/version-group/{id}/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "version-group"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v2",
                "version-group",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

