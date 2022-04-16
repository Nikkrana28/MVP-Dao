;[
  {
    inputs: [
      { internalType: 'address', name: 'busd_token', type: 'address' },
      { internalType: 'address', name: '_context', type: 'address' },
      { internalType: 'address', name: '_point_address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user_address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Claim',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'event_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum BetswampV2.Category',
        name: 'category',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sub_category',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'eventName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pool_size',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'eventTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'eventOne',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'eventTwo',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'betCreator',
        type: 'address',
      },
    ],
    name: 'CreateEvent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'event_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'bettor_address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum BetswampV2.Occurences',
        name: 'occured',
        type: 'uint8',
      },
    ],
    name: 'PlaceBet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'eventID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum BetswampV2.Occurences',
        name: 'occurence',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'validator_address',
        type: 'address',
      },
    ],
    name: 'ValidateEvent',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'enum BetswampV2.Category',
        name: '_category',
        type: 'uint8',
      },
      { internalType: 'string', name: '_sub_category', type: 'string' },
    ],
    name: 'addSubCategory',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_address', type: 'address' },
      { internalType: 'string', name: '_subcategory', type: 'string' },
      { internalType: 'bool', name: '_outcome', type: 'bool' },
    ],
    name: 'assignSubcategory',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_boostAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
    ],
    name: 'boostEvent',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_contextAddress', type: 'address' },
    ],
    name: 'changeContextContractAddress',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_point', type: 'address' }],
    name: 'changePointContractAddress',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_busd', type: 'address' }],
    name: 'changeTokenContractAddress',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'event_id', type: 'uint256' }],
    name: 'claimReward',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum BetswampV2.Category',
        name: '_category',
        type: 'uint8',
      },
      { internalType: 'string', name: '_sub_category', type: 'string' },
      { internalType: 'string', name: '_name', type: 'string' },
      { internalType: 'string', name: '_description', type: 'string' },
      { internalType: 'string', name: '_url', type: 'string' },
      { internalType: 'uint256', name: '_time', type: 'uint256' },
      { internalType: 'uint256', name: '_endTime', type: 'uint256' },
      { internalType: 'string', name: '_event1', type: 'string' },
      { internalType: 'string', name: '_event2', type: 'string' },
    ],
    name: 'createEvent',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getActiveEvents',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getActiveUsersList',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getContextContractAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user_address', type: 'address' },
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
    ],
    name: 'getCreatorRewardOnEvent',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'getEvent',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'eventID', type: 'uint256' },
          {
            internalType: 'enum BetswampV2.Category',
            name: 'categories',
            type: 'uint8',
          },
          { internalType: 'string', name: 'sub_category', type: 'string' },
          { internalType: 'string', name: 'eventName', type: 'string' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'string', name: 'url', type: 'string' },
          { internalType: 'uint256', name: 'poolSize', type: 'uint256' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'endTime', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'validationElapseTime',
            type: 'uint256',
          },
          { internalType: 'string', name: 'eventOne', type: 'string' },
          { internalType: 'string', name: 'eventTwo', type: 'string' },
          { internalType: 'bool', name: 'validated', type: 'bool' },
          {
            internalType: 'uint256',
            name: 'validatorsNeeded',
            type: 'uint256',
          },
          {
            internalType: 'enum BetswampV2.Occurences',
            name: 'occured',
            type: 'uint8',
          },
          { internalType: 'uint256', name: 'bettorsCount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'noOfBettorsRewarded',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'amountClaimed', type: 'uint256' },
          { internalType: 'bool', name: 'isBoosted', type: 'bool' },
          { internalType: 'uint256', name: 'boostTime', type: 'uint256' },
          { internalType: 'uint256', name: 'boostAmount', type: 'uint256' },
          { internalType: 'bool', name: 'isCreatorBetted', type: 'bool' },
          { internalType: 'address', name: 'betCreator', type: 'address' },
        ],
        internalType: 'struct BetswampV2.BetEvent',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      {
        internalType: 'enum BetswampV2.Occurences',
        name: '_occurred',
        type: 'uint8',
      },
    ],
    name: 'getEventOccurrenceBetAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNoOfActiveUsers',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      {
        internalType: 'enum BetswampV2.Occurences',
        name: '_occured',
        type: 'uint8',
      },
    ],
    name: 'getOccurrenceBetCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPointContractAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum BetswampV2.Category',
        name: '_category',
        type: 'uint8',
      },
    ],
    name: 'getSubCategory',
    outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTokenContractAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalPayout',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getTotalUserWagerAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalValidatorRewardClaimed',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getUserBetHistory',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getUserEventHistory',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      { internalType: 'address', name: '_bettor', type: 'address' },
    ],
    name: 'getUserEventWager',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      { internalType: 'address', name: '_bettor', type: 'address' },
    ],
    name: 'getUserEventWon',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getUserTotalWinnings',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getValidatedEvents',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_address', type: 'address' },
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
    ],
    name: 'getValidatorRewardOnEvent',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'isBetPaused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      { internalType: 'address', name: '_address', type: 'address' },
    ],
    name: 'isValidatorRewardClaimed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_duration', type: 'uint256' }],
    name: 'pauseBet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      {
        internalType: 'enum BetswampV2.Occurences',
        name: '_occured',
        type: 'uint8',
      },
    ],
    name: 'placeBet',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'event_id', type: 'uint256' }],
    name: 'reclaimWager',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum BetswampV2.Category',
        name: '_category',
        type: 'uint8',
      },
      { internalType: 'string', name: '_sub_category', type: 'string' },
    ],
    name: 'removeSubCategory',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBetCreated',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalEvents',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      { internalType: 'address', name: '_address', type: 'address' },
    ],
    name: 'transferCrumbs',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseBet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'event_id', type: 'uint256' },
      {
        internalType: 'enum BetswampV2.Occurences',
        name: 'occurence',
        type: 'uint8',
      },
    ],
    name: 'validateEvent',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_validator', type: 'address' }],
    name: 'validatorHistory',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
]