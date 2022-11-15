# CryptoTracker
[NFI](https://nfi.io/) Mobile App Assessment

# Description
Source: https://nonfungibleitem.notion.site/Mobile-App-Assessment-e6dd8e01abb947df89a050ed534e58fd

<img width="300" alt="image" src="https://user-images.githubusercontent.com/32460534/202030756-af3417df-52f1-4abb-8e1d-ae9bd6821104.png">
<img width="300" alt="image" src="https://user-images.githubusercontent.com/32460534/202030786-1621e6a7-9d0f-446d-a8b6-52608ac34d59.png">

# Demo

https://user-images.githubusercontent.com/32460534/202030955-cf759fdb-a62f-4b9c-90ab-895cd9105ffe.mp4

# Implementation details
### State
- The app has 2 main state; `tickers: string[]` and `real:Crypto[]`, both are arrays.
- `tickers` is used to store list of asset that the user wants to watch. 
- `real` is the filtered data from API

### Process overview
- On first load, API request ([/assets](https://data.messari.io/api/v1/assets)) will be made to get the list of all the crypto's data.
- Then it will be filtered based on the `tickers` array, to only show the relevant assets to the user.
- The filtered data is stored in `real` array.
- New symbol will be added to the `tickers` array when user `Add Cryptocurrency`

### Improvements 
- Allow users to choose from a list of cryptos instead of relying on text input
- Overall UI/UX can be improved

# Built with
- React Native Expo
- Redux Toolkit (State management)
- React Navigation (Screen management)
- Axios (Make network request)
