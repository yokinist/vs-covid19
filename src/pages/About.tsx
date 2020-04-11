import { h, FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import media from 'styled-media-query';
import GlobalStyle from '../styles';
import { Colors } from '../shared';
import images from '../assets/images/*.png';

const About: FunctionalComponent = () => {
  return (
    <div>
      <GlobalStyle />
      <PageContainer>
        <div className="content">
          <h1 id="title">
            <Link href="/">
              <img src={images.title} alt="VS COVID-19" />
              <span class="subtitle">#民間支援情報ナビ</span>
            </Link>
          </h1>
          <div className="card">
            <section>
              <h3>本サイトについて</h3>
              <p>
                2020年3月9日に総務省から出た
                <a
                  href="https://www.soumu.go.jp/menu_news/s-news/01ryutsu02_02000267.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  新型コロナウイルス感染症対策に対応した企業による無償等支援に関する情報の標準データ化とその公開について
                </a>
                のプレスリリースにある「＃民間支援情報ナビ」プロジェクトで
                <a
                  href="https://github.com/codeforjapan/vs-covid19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  公開されたソースコード
                </a>
                をもとにCode for
                Youthの有志がシステムやデザインを独自に改良して開発したサイトです。企業等による新型コロナウイルス感染症対策支援情報を調べることができます。
                本サイトも
                <a
                  href="https://github.com/codeforyouth/vs-covid19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  こちらに
                </a>
                ソースコードを公開しています。
              </p>
            </section>
            <section className="top-margin">
              <h3>本サイトを利用にするにあたって</h3>
              <p>
                政府の公開する企業等による支援情報のオープンデータに加え、提供されているサービスを公開資料を基に整理したものであり、支援サービスをすべて網羅しているわけではありません。また、空欄は公開情報に明確に情報が記載されていないため空欄にしており、その内容がないというわけではありません。またサービスの問い合わせ等は直接支援企業にお問い合わせ下さい。推奨ブラウザは、Chrome/Safariの最新版です。ブラウザによっては、動作しないことがあります。
                <br />
                <br />
                <hr />
                データ参照先:
                <a
                  href="https://docs.google.com/spreadsheets/d/1IiHUk3D_b6e5BfqFG3ZBxQ8X-QVACdY7CeQeG6C7S1w/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  企業などによる支援一覧(スプレッドシート)
                  <br />
                </a>
                「#民間支援情報ナビ」プロジェクトの
                <a
                  href="https://vscovid19.code4japan.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  検索サイト
                </a>
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default About;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.bgLightGray};
  display: flex;
  justify-content: center;
  > .content {
    > h1 {
      margin: 0;
      width: 100vw;
      padding: 30px 0 36px;
      color: white;
      text-align: center;
      background-color: ${Colors.purple};
      > a {
        > img {
          width: 480px;
          margin: 0 auto;
          ${media.lessThan('small')`
            width: 70vw;
          `}
        }
        > .subtitle {
          color: ${Colors.white};
          display: block;
          font-size: 30px;
          font-weight: normal;
          margin-top: -8px;
          ${media.lessThan('small')`
            margin-top: 0;
            font-size: 24px;
          `}
        }
      }
    }
    > .card {
      max-width: 800px;
      color: ${Colors.textBlack};
      background-color: ${Colors.white};
      border-radius: 6px;
      padding: 30px;
      margin: 30px auto;
      box-shadow: 0px 1px 18px rgba(0, 0, 0, 0.04);
      ${media.lessThan('small')`
        padding: 24px;
        margin: 36px 18px;
      `}
      a {
        color: ${Colors.purple};
        text-decoration: underline;
      }
      > section {
        h3 {
          margin-bottom: 8px;
        }
        hr {
          margin-bottom: 16px;
        }
        ${media.lessThan('small')`
          p {
            font-size: 14px;
          }
        `}
      }
      > section.top-margin {
        margin-top: 12px;
      }
    }
  }
`;
