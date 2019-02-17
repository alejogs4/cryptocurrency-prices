export interface Data {
  Id: string,
  Url: string,
  ImageUrl: string,
  Name: string,
  Symbol: string,
  CoinName: string,
  FullName: string,
  Algorithm: string,
  ProofType: string,
  FullyPremined: string,
  TotalCoinSupply: string,
  BuiltOn: string,
  SmartContractAddress: string,
  PreMinedValue: string,
  TotalCoinsFreeFloat: string,
  SortOrder: string,
  Sponsored: boolean,
  IsTrading: boolean,
  TotalCoinsMined: number,
  BlockNumber: number,
  NetHashesPerSecond: number,
  BlockReward: number,
  BlockTime: number
}
interface Cryptocurrency {
  Response: string
  Data: object
  BaseImageUrl: string
  BaseLinkUrl: string
  RateLimit: any
  HasWarning: boolean
  Type: number
}

export default Cryptocurrency
