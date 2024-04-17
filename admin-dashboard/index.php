<?php require_once("dashbord-header.php") ?>

<div>
     <div class="row">
          <div class="col-lg-6">
               <h6>
                    <span class="text-muted">Current Balance</span> GBP 1,407,962.00
               </h6>
          </div>
          <div class="col-lg-6">

          </div>
     </div>
</div>

<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
     <div class="tradingview-widget-container__widget"></div>
     <div class="tradingview-widget-copyright">
     </div>
     <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
          {
               "symbols": [{
                         "proName": "FOREXCOM:SPXUSD",
                         "title": "S&P 500"
                    },
                    {
                         "proName": "FOREXCOM:NSXUSD",
                         "title": "US 100"
                    },
                    {
                         "proName": "FX_IDC:EURUSD",
                         "title": "EUR/USD"
                    },
                    {
                         "proName": "BITSTAMP:BTCUSD",
                         "title": "Bitcoin"
                    },
                    {
                         "proName": "BITSTAMP:ETHUSD",
                         "title": "Ethereum"
                    }
               ],
               "showSymbolLogo": false,
               "colorTheme": "light",
               "isTransparent": true,
               "displayMode": "adaptive",
               "locale": "en"
          }
     </script>
</div>
<!-- TradingView Widget END -->
<div class="line"></div>

<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
     <div class="tradingview-widget-container__widget"></div>
     <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Financial Markets</span></a> by TradingView</div>
     <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async>
          {
               "width": "100%",
               "height": "100%",
               "symbolsGroups": [{
                         "name": "Indices",
                         "originalName": "Indices",
                         "symbols": [{
                                   "name": "FOREXCOM:SPXUSD",
                                   "displayName": "S&P 500"
                              },
                              {
                                   "name": "FOREXCOM:NSXUSD",
                                   "displayName": "US 100"
                              },
                              {
                                   "name": "FOREXCOM:DJI",
                                   "displayName": "Dow 30"
                              },
                              {
                                   "name": "INDEX:NKY",
                                   "displayName": "Nikkei 225"
                              },
                              {
                                   "name": "INDEX:DEU40",
                                   "displayName": "DAX Index"
                              },
                              {
                                   "name": "FOREXCOM:UKXGBP",
                                   "displayName": "UK 100"
                              }
                         ]
                    },
                    {
                         "name": "Futures",
                         "originalName": "Futures",
                         "symbols": [{
                                   "name": "CME_MINI:ES1!",
                                   "displayName": "S&P 500"
                              },
                              {
                                   "name": "CME:6E1!",
                                   "displayName": "Euro"
                              },
                              {
                                   "name": "COMEX:GC1!",
                                   "displayName": "Gold"
                              },
                              {
                                   "name": "NYMEX:CL1!",
                                   "displayName": "Crude Oil"
                              },
                              {
                                   "name": "NYMEX:NG1!",
                                   "displayName": "Natural Gas"
                              },
                              {
                                   "name": "CBOT:ZC1!",
                                   "displayName": "Corn"
                              }
                         ]
                    },
                    {
                         "name": "Bonds",
                         "originalName": "Bonds",
                         "symbols": [{
                                   "name": "CME:GE1!",
                                   "displayName": "Eurodollar"
                              },
                              {
                                   "name": "CBOT:ZB1!",
                                   "displayName": "T-Bond"
                              },
                              {
                                   "name": "CBOT:UB1!",
                                   "displayName": "Ultra T-Bond"
                              },
                              {
                                   "name": "EUREX:FGBL1!",
                                   "displayName": "Euro Bund"
                              },
                              {
                                   "name": "EUREX:FBTP1!",
                                   "displayName": "Euro BTP"
                              },
                              {
                                   "name": "EUREX:FGBM1!",
                                   "displayName": "Euro BOBL"
                              }
                         ]
                    },
                    {
                         "name": "Forex",
                         "originalName": "Forex",
                         "symbols": [{
                                   "name": "FX:EURUSD",
                                   "displayName": "EUR/USD"
                              },
                              {
                                   "name": "FX:GBPUSD",
                                   "displayName": "GBP/USD"
                              },
                              {
                                   "name": "FX:USDJPY",
                                   "displayName": "USD/JPY"
                              },
                              {
                                   "name": "FX:USDCHF",
                                   "displayName": "USD/CHF"
                              },
                              {
                                   "name": "FX:AUDUSD",
                                   "displayName": "AUD/USD"
                              },
                              {
                                   "name": "FX:USDCAD",
                                   "displayName": "USD/CAD"
                              }
                         ]
                    }
               ],
               "showSymbolLogo": true,
               "colorTheme": "light",
               "isTransparent": true,
               "locale": "en"
          }
     </script>
</div>
<!-- TradingView Widget END -->

</div>

<?php require_once("dashboard-footer.php") ?>