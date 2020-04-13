/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { h, FunctionalComponent } from 'preact';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Support } from '../typings';
import { Colors } from '../shared';
import DateRange from '@material-ui/icons/DateRange';
import Person from '@material-ui/icons/PermIdentity';

type Props = Support;
const Card: FunctionalComponent<Props> = props => {
  const categoryArray = props['分野'].split(',');
  return (
    <a href={props.URL} target="_blank" rel="noopener noreferrer">
      <Container>
        <div className="top">
          <div className="tags">
            {categoryArray.length > 1 ? (
              categoryArray.map((category, i) => (
                <CategoryLabel type={category.trim()} key={i} className="type">
                  {category}
                </CategoryLabel>
              ))
            ) : (
              <CategoryLabel type={props['分野'].trim()} className="type">
                {props['分野']}
              </CategoryLabel>
            )}
            <div className="item">{props['サービス分類']}</div>
            <div className="item">{props['無料/有料']}</div>
          </div>
          <h2>{props['サービス名称']}</h2>
          <p>{props['詳細']}</p>
          <div className="list">
            <div className="item">
              {(props['開始日'] || props['終了日'] || props['期間備考']) && (
                <DateRange />
              )}
              <OneLine>
                {props['開始日'] &&
                  props['終了日'] &&
                  props['開始日'] + 'から' + props['終了日'] + 'まで'}
                {props['開始日'] &&
                  !props['終了日'] &&
                  props['開始日'] + 'から'}
                {props['終了日'] &&
                  !props['開始日'] &&
                  props['終了日'] + 'まで'}
                {props['期間備考'] && ' ※ ' + props['期間備考']}
              </OneLine>
            </div>
            <div className="item">
              {props['対象者'] && <Person />}
              <OneLine>{props['対象者']}</OneLine>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="from">{'提供: ' + props['企業等']}</div>
          <div className="url">アクセスする</div>
        </div>
      </Container>
    </a>
  );
};

const getBGColor = (type: string): string => {
  switch (type) {
    case 'ワークスタイル（テレワーク含む）':
      return Colors.purple;
    case '情報通信':
      return Colors.blue;
    case 'コミュニケーション':
      return Colors.greenBlue;
    case '教育、学習支援':
    case '教育・学習支援':
      return Colors.red;
    case '生活関連サービス、娯楽':
    case '生活関連サービス・娯楽':
      return Colors.orange;
    case '宿泊、飲食サービス':
    case '宿泊・飲食サービス':
      return Colors.green;
    case '医療、福祉':
    case '医療・福祉':
      return Colors.yellow;
    case 'その他':
    default:
      return Colors.violet;
  }
};

const OneLine = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    white-space: normal;
  }
`;

const CategoryLabel = styled.div<{ type?: string }>`
  color: white;
  background-color: ${({ type }) => getBGColor(type)};
  padding: 4px 8px;
  display: inline-block;
  border-radius: 4px;
  ${media.lessThan('small')`
    margin: 4px 8px 4px 0;
  `}
`;

const Container = styled.div`
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 1px 18px rgba(0, 0, 0, 0.04);
  background-color: ${Colors.white};
  margin: 1em 0;
  line-height: 1.8em;
  &:hover {
    box-shadow: 0px 1px 18px rgba(0, 0, 0, 0.12);
    > .bottom {
      > .url {
        background-color: ${Colors.purple};
        color: ${Colors.white};
      }
    }
  }
  > .top {
    padding: 32px 20px;
    > p {
      color: ${Colors.textBlack};
    }
    > .tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 20px;
      > .type {
        margin: 0 8px 0 0;
      }
      > .item {
        padding: 4px 8px;
        margin-right: 8px;
        border-radius: 4px;
        color: ${Colors.textGray};
        background-color: ${Colors.bgLightGray};
      }
    }
    > h2 {
      margin-bottom: 16px;
      color: ${Colors.textBlack};
    }
    > .list {
      margin-top: 16px;
      > .item {
        display: flex;
        align-items: center;
        color: ${Colors.textBlack};
        &:nth-child(odd) {
          margin: 0px 8px 0px 0px;
        }
        > svg {
          font-size: 24px;
          color: ${Colors.textBlack};
          margin-right: 8px;
        }
      }
    }
  }
  > .bottom {
    border-top: 1px solid ${Colors.borderGray};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    > .from {
      color: ${Colors.textGray};
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > .url {
      cursor: pointer;
      border-radius: 100px;
      border: 1px solid ${Colors.purple};
      background-color: ${Colors.white};
      font-weight: bold;
      text-align: center;
      padding: 8px 48px;
      font-weight: normal;
      display: block;
      text-decoration: none;
      color: ${Colors.purple};
    }
  }
  ${media.lessThan('small')`
    > .top {
      padding: 32px 20px;
      > .tags {
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        > .type {
          margin: 4px 8px 4px 0;
        }
        > .item {
          margin: 4px 8px 4px 0;
        }
      }
    }
    > .bottom {
      padding: 20px;
      > .from {
        margin-bottom: 12px;
        width: 100%;
        text-align: left;
      }
      > .url {
        margin-bottom: 8px;
        margin-left: auto;
      }
    }
  `}
`;

export default Card;
