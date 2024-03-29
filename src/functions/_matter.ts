import { Matter } from 'types/post';
import { NestedPartial } from 'types/utils';

export type Data = {
  display: 'public' | 'private';
  status: string;
  industry: string;
  position: string;
  body: string;
  period: { year: number; month: number };
  costs: {
    display: 'public' | 'private';
    type: string;
    min: number | null;
    max: number | null;
    contract?: number | null;
  };
  handles: { handle: string }[];
  tools: { tool: string }[];
  note: string;
  memo: string;

  title: string;
  location: { area: string; place: string };
  requires: { require: string }[];
  prefers: { prefer: string }[];
  adjustment: string;
  interviews: { type: string; count: string; setting: string };
  times: { start: string; end: string };
  remote: string;
  distribution: string;
  span: string;
  approval: string;
};

const positions = [
  'フロントエンドエンジニア',
  'バックエンドエンジニア',
  'サーバーエンジニア',
  'ブロックチェーンエンジニア',
  'インフラエンジニア',
  'データベースエンジニア',
  'クラウドエンジニア',
  'ネットワークエンジニア',
  'セキュリティエンジニア',
  'リードエンジニア',
  'システムエンジニア',
  '社内SE',
  'アプリエンジニア',
  'iOSエンジニア',
  'Androidエンジニア',
  '機械学習エンジニア',
  'AIエンジニア(人工知能)',
  '汎用機エンジニア',
  'マークアップエンジニア',
  'テストエンジニア',
  'テスター・デバッガー・QA',
  '組み込み・制御',
  'データサイエンティスト',
  'PdM',
  'PM/PL',
  'PM',
  'PMO',
  'PMOサポート',
  'VPoE',
  'CRE',
  'SRE',
  'エンジニアリングマネージャー',
  'SAP',
  'プロデューサー',
  'コンサルタント',
  'マーケター',
  'Webディレクター',
  'Webプランナー',
  'Webデザイナー',
  'Webコーダー',
  'UI・UXデザイナー',
  'グラフィックデザイナー',
  '3Dデザイナー',
  '2Dデザイナー',
  'キャラクターデザイナー',
  'イラストレーター',
  'アートディレクター',
  'ゲームプランナー',
  'ゲームデザイナー',
  'サポート',
  'キッティング',
  'ヘルプデスク',
  'IT事務',
  '若手枠',
  '未経験可',
  'その他',
];

export const defaultValues = (post: Matter): NestedPartial<Data> => {
  return {
    display: post?.display,
    title: post?.title,
    body: post?.body,
    industry: post?.industry,
    position: positions.includes(post.position) ? post?.position : undefined,
    location: post?.location,
    period: {
      year: post?.period?.year,
      month: post?.period?.month,
    },
    costs: {
      min: post?.costs?.min ? post?.costs?.min : null,
      max: post?.costs?.max ? post?.costs?.max : null,
      contract: post?.costs?.contract ? post?.costs?.contract : null,
      display: post?.costs?.display,
      type: post?.costs?.type,
    },
    handles: post.handles?.length
      ? post.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: '' }],
    tools: post.tools?.length
      ? post.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: '' }],
    requires: post.requires?.length
      ? post.requires.map((value) => ({
          require: value,
        }))
      : [{ require: '' }],
    prefers: post.prefers?.length
      ? post.prefers.map((value) => ({
          prefer: value,
        }))
      : [{ prefer: '' }],
    adjustment: post?.adjustment,
    interviews: post?.interviews,
    times: post?.times,
    remote: post?.remote,
    distribution: post?.distribution,
    span: post?.span,
    approval: post?.approval ? post?.approval : '不明',
    note: post?.note,
    status: post?.status,
    memo: post?.memo,
  };
};

export const edit = (data: Data): Omit<Matter, 'objectID' | 'uid' | 'createAt'> => {
  return {
    display: data.display,
    title: data.title,
    industry: data.industry,
    position: data.position,
    body: data.body,
    location: data.location,
    period: {
      year: Number(data.period.year),
      month: Number(data.period.month),
    },
    costs: {
      min: data.costs.min ? Number(data.costs.min) : null,
      max: data.costs.max ? Number(data.costs.max) : null,
      contract: data.costs.contract ? Number(data.costs.contract) : null,
      display: data.costs.display,
      type: data.costs.type,
    },
    adjustment: data.adjustment,
    times: data.times,
    handles: data.handles.filter((array) => array.handle).map((array) => array.handle),
    tools: data.tools.filter((array) => array.tool).map((array) => array.tool),
    requires: data.requires.filter((array) => array.require).map((array) => array.require),
    prefers: data.prefers.filter((array) => array.prefer).map((array) => array.prefer),
    interviews: data.interviews,
    remote: data.remote,
    distribution: data.distribution,
    span: data.span,
    approval: data.approval,
    note: data.note,
    status: data.status,
    memo: data.memo,
  };
};
