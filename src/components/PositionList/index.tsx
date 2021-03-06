import { Trans } from '@lingui/macro'
import PositionListItem from 'components/PositionListItem'
import React from 'react'
import styled from 'styled-components/macro'
import { MEDIA_WIDTHS } from 'theme'
import { PositionDetails } from 'types/position'

const DesktopHeader = styled.div`
  display: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;

  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`

const MobileHeader = styled.div`
  font-weight: medium;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  @media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: none;
  }
`

type PositionListProps = React.PropsWithChildren<{
  positions: PositionDetails[]
  setUserHideClosedPositions: any
  userHideClosedPositions: boolean
}>

export default function PositionList({
  positions,
  setUserHideClosedPositions,
  userHideClosedPositions,
}: PositionListProps) {
  // const [] = useState(false);
  return (
    <>
      <DesktopHeader>
        <div>
          <Trans>positions</Trans>
          {positions && ' (' + positions.length + ')'}
        </div>
        {/* <ButtonText style={{ opacity: 0.6 }} onClick={() => setUserHideClosedPositions(!userHideClosedPositions)}>
          <Trans>Hide closed positions</Trans>
        </ButtonText> */}
      </DesktopHeader>
      <MobileHeader>
        <Trans>positions</Trans>
      </MobileHeader>

      {positions.length > 0 &&
        positions.map((p) => {
          return <PositionListItem key={p.tokenId.toString()} positionDetails={p} tokenId={p.tokenId} />
        })}
    </>
  )
}
