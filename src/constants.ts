import { generateMedia } from 'styled-media-query';
export const SHEET_URL =
  'https://raw.githubusercontent.com/codeforjapan/vs-covid19/master/vscovid19-data.json';

export const LAYOUT_WIDTH = 920;

type keys = 'development' | 'production';
export const BASE_URL = {
  development: 'http://localhost:1234',
  production: 'http://vs-covid19.now.sh',
}[(process.env.NODE_ENV as keys) || 'development'];

export const Meta = {
  title: 'VS COVID-19 #民間支援情報ナビ',
  description: '企業等による新型コロナウイルス感染症対策支援サービスまとめ',
};

export const customMedia = generateMedia({
  xs: '320px',
});
