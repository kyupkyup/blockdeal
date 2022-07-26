import Section from 'BlockDEX/components/Section'

export const Introduction = () => {
  return (
    <>
      <Section
        title={
          <span className="uk-text-white" style={{ fontFamily: 'BaronNeue-Black' }}>
            Changing the block trading landscape
          </span>
        }
      >
        <div className="uk-grid uk-grid-match uk-child-width-1-2@m">
          <div>
            <div className="uk-padding-small">
              <div className="uk-h4 uk-text-white uk-margin-top">Ownership of Block DEX to Partners</div>
              <div className="uk-p uk-margin-remove-top">
                When users trade with your affiliate wallet address as referral address, you can earn part of their
                commissions in Block DEX tokens.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-small">
              <div className="uk-h4 uk-text-white uk-margin-top">No fees</div>
              <div className="uk-p uk-margin-remove-top">
                You pay zero commission if you are a taker of a block order.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-small">
              <div className="uk-h4 uk-text-white uk-margin-top">The most transparent price</div>
              <div className="uk-p uk-margin-remove-top">
                You trade at price derived from Chainlink price oralce, which offers the most transparent price.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-small">
              <div className="uk-h4 uk-text-white uk-margin-top">DEX aggregator Integrations</div>
              <div className="uk-p uk-margin-remove-top">
                You have access to DEX aggregators, which executes block orders with speed.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export const Benefits = () => {
  return (
    <>
      <Section
        title={
          <span className="uk-text-white" style={{ fontFamily: 'BaronNeue-Black' }}>
            Advantages of BLOCKDEX
          </span>
        }
      >
        <div className="uk-grid uk-grid-match uk-child-width-1-1@m">
          <div>
            <div className="uk-h5 uk-text-white uk-text-bold uk-margin-small-top uk-margin-small-bottom uk-padding-large uk-padding-remove-vertical">
              Using Block DEX for crypto transactions gives our users many advantages to their trades, including the
              following:
            </div>
          </div>
          <div>
            <div className="uk-padding-large uk-padding-remove-vertical">
              <div className="uk-p uk-margin-remove">
                1. You are able to quickly trade large quantities of cryptocurrencies in a single trade.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-large uk-padding-remove-vertical">
              <div className="uk-p uk-margin-remove">
                2. You can save time by executing your trades through DEX aggregators.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-large uk-padding-remove-vertical">
              <div className="uk-p uk-margin-remove">
                3. Your trade does not impact the price because the order books will not be touched.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-padding-large uk-padding-remove-vertical">
              <div className="uk-p uk-margin-remove">
                4. You will benefit from direct settlements into your wallet with your block trades; no need to handle
                different wallet addresses.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export const Team = () => {
  return (
    <Section
      title={
        <>
          <span className="uk-text-white" style={{ fontFamily: 'Poppins-Black' }}>
            Team
          </span>
        </>
      }
    >
      <div className="uk-grid uk-grid-match uk-child-width-1-1@m">
        <div>
          <div className="uk-h5 uk-text-white uk-text-bold uk-margin-small-top uk-margin-small-bottom uk-padding-large uk-padding-remove-vertical">
            X
          </div>
          <div className="uk-h5 uk-text-white uk-text-bold uk-margin-small-top uk-margin-small-bottom uk-padding-large uk-padding-remove-vertical">
            Y
          </div>
        </div>
      </div>
    </Section>
  )
}

export const AuditBy = () => {
  return (
    <Section
      title={
        <>
          <span className="uk-text-white" style={{ fontFamily: 'Poppins' }}>
            Security Audits
          </span>
        </>
      }
    >
      <div className="uk-grid uk-grid-match uk-child-width-1-1@m">
        <div>
          <div className="uk-h5 uk-text-white uk-text-bold uk-margin-small-top uk-margin-small-bottom uk-padding-large uk-padding-remove-vertical">
            SLOWMIST
          </div>
        </div>
      </div>
    </Section>
  )
}

export const BlockDEXStats = () => {
  return (
    <Section
      title={
        <>
          <span className="uk-text-white" style={{ fontFamily: 'BaronNeue-Black' }}>
            BLOCKDEX Numbers
          </span>
        </>
      }
    >
      <div className="uk-grid uk-grid-match uk-child-width-1-3@m">
        <div className="uk-flex uk-flex-row uk-flex-center uk-margin-medium-bottom">
          <div
            className="uk-text-center uk-margin-remove-bottom"
            style={{ fontSize: '45px', fontFamily: 'Poppins', fontWeight: 'bold' }}
          >
            $121M
          </div>
          <div className="uk-h6 uk-text-center uk-margin-remove" style={{ color: '#d7d7d7' }}>
            Total Volume
          </div>
        </div>
        <div className="uk-flex uk-flex-row uk-flex-center uk-margin-medium-bottom">
          <div
            className="uk-text-center uk-margin-remove-bottom"
            style={{ fontSize: '45px', fontFamily: 'Poppins', fontWeight: 'bold' }}
          >
            $1.2B
          </div>
          <div className="uk-h6 uk-text-center uk-margin-remove" style={{ color: '#d7d7d7' }}>
            Total Trades
          </div>
        </div>
        <div className="uk-flex uk-flex-row uk-flex-center uk-margin-medium-bottom">
          <div
            className="uk-text-center uk-margin-remove-bottom"
            style={{ fontSize: '45px', fontFamily: 'Poppins', fontWeight: 'bold' }}
          >
            8,722
          </div>
          <div className="uk-h6 uk-text-center uk-margin-remove" style={{ color: '#d7d7d7' }}>
            Total Wallets
          </div>
        </div>
      </div>
    </Section>
  )
}
