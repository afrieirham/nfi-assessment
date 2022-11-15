

export interface MarketData {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour?: any;
  percent_change_btc_last_1_hour?: any;
  percent_change_eth_last_1_hour?: any;
  percent_change_usd_last_24_hours: number;
  percent_change_btc_last_24_hours: number;
  percent_change_eth_last_24_hours: number;
  ohlcv_last_1_hour?: any;
  ohlcv_last_24_hour?: any;
  last_trade_at: Date;
}

export interface Marketcap {
  rank: number;
  marketcap_dominance_percent: number;
  current_marketcap_usd: number;
  y_2050_marketcap_usd: number;
  y_plus10_marketcap_usd: number;
  liquid_marketcap_usd: number;
  volume_turnover_last_24_hours_percent: number;
  realized_marketcap_usd: number;
  outstanding_marketcap_usd: number;
}

export interface Supply {
  y_2050: number;
  y_plus10: number;
  liquid: number;
  circulating: number;
  y_2050_issued_percent: number;
  annual_inflation_percent: number;
  stock_to_flow: number;
  y_plus10_issued_percent: number;
  supply_revived_90d: number;
}

export interface BlockchainStats24Hours {
  count_of_active_addresses: number;
  transaction_volume: number;
  adjusted_transaction_volume: number;
  adjusted_nvt: number;
  median_tx_value: number;
  median_tx_fee: number;
  count_of_tx: number;
  count_of_payments: number;
  new_issuance: number;
  average_difficulty: number;
  kilobytes_added?: any;
  count_of_blocks_added: number;
}

export interface MarketDataLiquidity {
  clearing_prices_to_sell?: any;
  marketcap?: any;
  asset_bid_depth?: any;
  usd_bid_depth?: any;
  updated_at: Date;
}

export interface AllTimeHigh {
  price: number;
  at: Date;
  days_since: number;
  percent_down: number;
  breakeven_multiple: number;
}

export interface CycleLow {
  price: number;
  at: Date;
  percent_up: number;
  days_since: number;
}

export interface TokenSaleStats {
  sale_proceeds_usd?: any;
  sale_start_date?: any;
  sale_end_date?: any;
  roi_since_sale_usd_percent?: any;
  roi_since_sale_btc_percent?: any;
  roi_since_sale_eth_percent?: any;
}

export interface MiningStats {
  mining_algo: string;
  network_hash_rate: string;
  available_on_nicehash_percent: number;
  "1_hour_attack_cost"?: any;
  "24_hours_attack_cost"?: any;
  attack_appeal?: any;
  hash_rate: number;
  hash_rate_30d_average: number;
  mining_revenue_per_hash_usd: number;
  mining_revenue_per_hash_native_units: number;
  mining_revenue_per_hash_per_second_usd: number;
  mining_revenue_per_hash_per_second_native_units: number;
  mining_revenue_from_fees_percent_last_24_hours: number;
  mining_revenue_native: number;
  mining_revenue_usd: number;
  mining_revenue_total: number;
  average_difficulty: number;
}

export interface DeveloperActivity {
  stars: number;
  watchers: number;
  commits_last_3_months?: any;
  commits_last_1_year?: any;
  lines_added_last_3_months?: any;
  lines_added_last_1_year?: any;
  lines_deleted_last_3_months?: any;
  lines_deleted_last_1_year?: any;
}

export interface RoiData {
  percent_change_last_1_week: number;
  percent_change_last_1_month: number;
  percent_change_last_3_months: number;
  percent_change_last_1_year: number;
  percent_change_btc_last_1_week: number;
  percent_change_btc_last_1_month: number;
  percent_change_btc_last_3_months: number;
  percent_change_btc_last_1_year: number;
  percent_change_eth_last_1_week: number;
  percent_change_eth_last_1_month: number;
  percent_change_eth_last_3_months: number;
  percent_change_eth_last_1_year: number;
  percent_change_month_to_date: number;
  percent_change_quarter_to_date: number;
  percent_change_year_to_date: number;
}

export interface RoiByYear {
  "2021_usd_percent": number;
  "2020_usd_percent": number;
  "2019_usd_percent": number;
  "2018_usd_percent": number;
  "2017_usd_percent": number;
  "2016_usd_percent": number;
  "2015_usd_percent": number;
  "2014_usd_percent": number;
  "2013_usd_percent": number;
  "2012_usd_percent": number;
  "2011_usd_percent": number;
}

export interface SharpeRatios {
  last_30_days: number;
  last_90_days: number;
  last_1_year: number;
  last_3_years: number;
}

export interface VolatilityStats {
  volatility_last_30_days: number;
  volatility_last_90_days: number;
  volatility_last_1_year: number;
  volatility_last_3_years: number;
}

export interface RiskMetrics {
  sharpe_ratios: SharpeRatios;
  volatility_stats: VolatilityStats;
}

export interface MiscData {
  private_market_price_usd?: any;
  vladimir_club_cost?: any;
  btc_current_normalized_supply_price_usd?: any;
  btc_y2050_normalized_supply_price_usd?: any;
  asset_created_at?: any;
  asset_age_days?: any;
  categories: string[];
  sectors: string[];
  tags?: any;
}

export interface Reddit {
  active_user_count: number;
  subscribers: number;
}

export interface OnChainData {
  addresses_count: number;
  active_addresses: number;
  active_addresses_received_count: number;
  active_addresses_sent_count: number;
  addresses_balance_greater_0_001_native_units_count: number;
  addresses_balance_greater_0_01_native_units_count: number;
  addresses_balance_greater_0_1_native_units_count: number;
  addresses_balance_greater_1_usd_count: number;
  addresses_balance_greater_1_native_units_count: number;
  addresses_balance_greater_10_usd_count: number;
  addresses_balance_greater_10_native_units_count: number;
  addresses_balance_greater_100_usd_count: number;
  addresses_balance_greater_100_native_units_count: number;
  addresses_balance_greater_100k_usd_count: number;
  addresses_balance_greater_100k_native_units_count: number;
  addresses_balance_greater_10k_usd_count: number;
  addresses_balance_greater_10k_native_units_count: number;
  addresses_balance_greater_10m_usd_count: number;
  addresses_balance_greater_1k_usd_count: number;
  addresses_balance_greater_1k_native_units_count: number;
  addresses_balance_greater_1m_usd_count: number;
  addresses_balance_greater_1m_native_units_count: number;
  average_block_gas_limit?: any;
  block_height: number;
  average_block_interval: number;
  blocks_added_last_24_hours: number;
  block_size_bytes_total: number;
  block_size_bytes_average: number;
  uncle_blocks_count_last_24_hours?: any;
  uncle_rewards_last_24_hours_usd?: any;
  uncle_rewards_last_24_hours_native_units?: any;
  mining_revenue_from_uncle_blocks_percent_last_24_hours?: any;
  block_weight: number;
  average_block_weight: number;
  total_fees_last_24_hours: number;
  total_fees_last_24_hours_usd: number;
  hash_rate: number;
  issuance_last_24_hours_native_units: number;
  issuance_rate_daily: number;
  issuance_total_usd: number;
  issuance_total_native_units: number;
  new_issuance: number;
  issuance_rate: number;
  realized_marketcap_usd: number;
  adjusted_nvt: number;
  adjusted_nvt_90d_moving_average: number;
  adjusted_rvt: number;
  adjusted_rvt_90d_moving_average: number;
  txn_count_last_24_hours: number;
  txn_contracts_calls_count_last_24_hours?: any;
  txn_contracts_calls_success_count_last_24_hours?: any;
  txn_contracts_creation_count_last_24_hours?: any;
  txn_contracts_destruction_count_last_24_hours?: any;
  txn_contracts_count_last_24_hours?: any;
  txn_erc20_count_last_24_hours?: any;
  txn_erc721_count_last_24_hours?: any;
  txn_per_second_count: number;
  txn_token_count_last_24_hours?: any;
  average_fee_usd: number;
  average_fee_native_units: number;
  median_fee_usd: number;
  median_fee_native_units: number;
  average_txn_gas_used?: any;
  txn_gas_limit_last_24_hours?: any;
  average_txn_gas_limit?: any;
  txn_gas_used_last_24_hours?: any;
  transfer_count_last_24_hours: number;
  transfer_erc_20_count_last_24_hours?: any;
  transfer_erc721_count_last_24_hours?: any;
  txn_volume_last_24_hours_usd: number;
  adjusted_txn_volume_last_24_hours_usd: number;
  adjusted_txn_volume_last_24_hours_native_units: number;
  txn_volume_last_24_hours_native_units: number;
  average_transfer_value_usd: number;
  average_transfer_value_native_units: number;
  median_transfer_value_usd: number;
  median_transfer_value_native_units: number;
  average_utxo_age: number;
  value_weighted_average_utxo_age: number;
  median_utxo_age: number;
  utxo_count_last_24_hours: number;
  utxo_in_loss_count: number;
  utxo_in_profit_count: number;
}

export interface ExchangeFlows {
  flow_in_exchange_native_units: number;
  flow_in_exchange_usd: number;
  flow_in_exchange_native_units_inclusive: number;
  flow_in_exchange_usd_inclusive: number;
  flow_out_exchange_native_units: number;
  flow_out_exchange_usd: number;
  flow_out_exchange_native_units_inclusive: number;
  flow_out_exchange_usd_inclusive: number;
  flow_in_binance_usd: number;
  flow_in_binance_native_units: number;
  flow_in_bitfinex_usd: number;
  flow_in_bitfinex_native_units: number;
  flow_in_bitmex_usd: number;
  flow_in_bitmex_native_units: number;
  flow_in_bitstamp_usd: number;
  flow_in_bitstamp_native_units: number;
  flow_in_bittrex_usd: number;
  flow_in_bittrex_native_units: number;
  flow_in_gemini_usd: number;
  flow_in_gemini_native_units: number;
  flow_in_huobi_usd: number;
  flow_in_huobi_native_units: number;
  flow_in_kraken_usd: number;
  flow_in_kraken_native_units: number;
  flow_in_poloniex_usd: number;
  flow_in_poloniex_native_units: number;
  flow_net_binance_usd: number;
  flow_net_binance_native_units: number;
  flow_net_bitfinex_usd: number;
  flow_net_bitfinex_native_units: number;
  flow_net_bitmex_usd: number;
  flow_net_bitmex_native_units: number;
  flow_net_bitstamp_usd: number;
  flow_net_bitstamp_native_units: number;
  flow_net_bittrex_usd: number;
  flow_net_bittrex_native_units: number;
  flow_net_gemini_usd: number;
  flow_net_gemini_native_units: number;
  flow_net_huobi_usd: number;
  flow_net_huobi_native_units: number;
  flow_net_kraken_usd: number;
  flow_net_kraken_native_units: number;
  flow_net_poloniex_usd: number;
  flow_net_poloniex_native_units: number;
  flow_out_binance_usd: number;
  flow_out_binance_native_units: number;
  flow_out_bitfinex_usd: number;
  flow_out_bitfinex_native_units: number;
  flow_out_bitmex_usd: number;
  flow_out_bitmex_native_units: number;
  flow_out_bitstamp_usd: number;
  flow_out_bitstamp_native_units: number;
  flow_out_bittrex_usd: number;
  flow_out_bittrex_native_units: number;
  flow_out_gemini_usd: number;
  flow_out_gemini_native_units: number;
  flow_out_huobi_usd: number;
  flow_out_huobi_native_units: number;
  flow_out_kraken_usd: number;
  flow_out_kraken_native_units: number;
  flow_out_poloniex_usd: number;
  flow_out_poloniex_native_units: number;
  supply_exchange_native_units: number;
  supply_exchange_usd: number;
  supply_binance_usd: number;
  supply_binance_native_units: number;
  supply_bitfinex_usd: number;
  supply_bitfinex_native_units: number;
  supply_bitmex_usd: number;
  supply_bitmex_native_units: number;
  supply_bitstamp_usd: number;
  supply_bitstamp_native_units: number;
  supply_bittrex_usd: number;
  supply_bittrex_native_units: number;
  supply_gemini_usd: number;
  supply_gemini_native_units: number;
  supply_huobi_usd: number;
  supply_huobi_native_units: number;
  supply_kraken_usd: number;
  supply_kraken_native_units: number;
  supply_poloniex_usd: number;
  supply_poloniex_native_units: number;
}

export interface MinerFlows {
  supply_1hop_miners_usd: number;
  supply_1hop_miners_native_units: number;
  supply_miners_usd: number;
  supply_miners_native_units: number;
}

export interface SupplyActivity {
  supply_active_10y: number;
  supply_active_180d: number;
  supply_active_1d: number;
  supply_active_1y: number;
  supply_active_1y_percent: number;
  supply_active_2y: number;
  supply_active_30d: number;
  supply_active_3y: number;
  supply_active_4y: number;
  supply_active_5y: number;
  supply_active_7d: number;
  supply_active_90d: number;
  supply_active_ever: number;
  outstanding: number;
  supply_revived_1y: number;
  supply_revived_2y: number;
  supply_revived_30d: number;
  supply_revived_3y: number;
  supply_revived_4y: number;
  supply_revived_5y: number;
  supply_revived_7d: number;
  supply_revived_90d: number;
}

export interface SupplyDistribution {
  supply_in_addresses_balance_greater_0_001_native_units: number;
  supply_in_addresses_balance_greater_0_01_native_units: number;
  supply_in_addresses_balance_greater_0_1_native_units: number;
  supply_in_addresses_balance_greater_1_usd: number;
  supply_in_addresses_balance_greater_10_usd: number;
  supply_in_addresses_balance_greater_100_usd: number;
  supply_in_addresses_balance_greater_100k_usd: number;
  supply_in_addresses_balance_greater_100k_native_units: number;
  supply_in_addresses_balance_greater_100_native_units: number;
  supply_in_addresses_balance_greater_10k_usd: number;
  supply_in_addresses_balance_greater_10k_native_units: number;
  supply_in_addresses_balance_greater_10m_usd: number;
  supply_in_addresses_balance_greater_10_native_units: number;
  supply_in_addresses_balance_greater_1k_usd: number;
  supply_in_addresses_balance_greater_1k_native_units: number;
  supply_in_addresses_balance_greater_1m_usd: number;
  supply_in_addresses_balance_greater_1m_native_units: number;
  supply_in_addresses_balance_greater_1_native_units: number;
  supply_in_contracts_usd?: any;
  supply_in_contracts_native_units?: any;
  supply_shielded?: any;
  supply_in_top_100_addresses: number;
  supply_in_top_10_percent_addresses: number;
  supply_in_top_1_percent_addresses: number;
  supply_in_utxo_in_loss: number;
  supply_in_utxo_in_profit: number;
}

export interface Metrics {
  market_data: MarketData;
  marketcap: Marketcap;
  supply: Supply;
  blockchain_stats_24_hours: BlockchainStats24Hours;
  market_data_liquidity: MarketDataLiquidity;
  all_time_high: AllTimeHigh;
  cycle_low: CycleLow;
  token_sale_stats: TokenSaleStats;
  mining_stats: MiningStats;
  developer_activity: DeveloperActivity;
  roi_data: RoiData;
  roi_by_year: RoiByYear;
  risk_metrics: RiskMetrics;
  misc_data: MiscData;
  reddit: Reddit;
  on_chain_data: OnChainData;
  exchange_flows: ExchangeFlows;
  miner_flows: MinerFlows;
  supply_activity: SupplyActivity;
  supply_distribution: SupplyDistribution;
  alert_messages?: any;
}

export interface TokenDistribution {
  sale_start?: any;
  sale_end?: any;
  initial_distribution: number;
  current_supply?: any;
  max_supply: number;
  description: string;
}

export interface TokenDetails {
  usage: string;
  type: string;
  sales_rounds?: any;
  block_reward: number;
  targeted_block_time_in_sec: number;
  on_chain_governance_structure?: any;
  is_treasury_decentralized: boolean;
  launch_style: string;
  initial_supply: number;
  percentage_allocated_to_investors_from_initial_supply: number;
  percentage_allocated_to_premined_or_airdrops_from_initial_supply: number;
  percentage_allocated_to_organizations_or_founders_supply: number;
  mining_algorithm: string;
  next_halving_date: string;
  genesis_block_date: string;
  is_victim_of_51_percent_attack: boolean;
  emission_type_general: string;
  emission_type_precise: string;
  is_capped_supply: boolean;
  max_supply: number;
}

export interface Organization {
  name: string;
  founded_date?: any;
  governance?: any;
  legal_structure?: any;
  jurisdiction?: any;
  org_charter?: any;
  description: string;
  people_count_estimate?: any;
}

export interface Contributor {
  first_name: string;
  last_name: string;
  description: string;
  avatar_url: string;
  twitter?: any;
  github?: any;
  medium?: any;
  linkedin?: any;
}

export interface People {
  founding_team?: any;
  contributors: Contributor[];
  investors?: any;
  advisors?: any;
}

export interface RelevantResource {
  name: string;
  url: string;
}

export interface Profile {
  is_verified: boolean;
  tagline: string;
  overview: string;
  background: string;
  technology: string;
  category: string;
  sector: string;
  tag: string;
  sfarScore: number;
  token_distribution: TokenDistribution;
  token_details: TokenDetails;
  organizations: Organization[];
  people: People;
  relevant_resources: RelevantResource[];
  consensus_algorithm: string;
}

export interface Crypto {
  id: string;
  serial_id: number;
  symbol: string;
  name: string;
  slug: string;
  contract_addresses?: any;
  _internal_temp_agora_id: string;
  metrics: Metrics;
  profile: Profile;
}



