import {
  createClient,
  type MicroCMSQueries,
  type MicroCMSImage,
  type MicroCMSDate,
  type MicroCMSListResponse,
} from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env
    .MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env
    .MICROCMS_API_KEY,
});

export type Anime = {
  id: string;
  title: string;
  image: MicroCMSImage;
  body: string;
} & MicroCMSDate;

//APIの呼び出し
export const getAnimes = async (
  queries?: MicroCMSQueries,
) => {
  return await client.get<
    MicroCMSListResponse<Anime>
  >({ endpoint: 'animes', queries });
};

export const getAnimeDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Anime>(
    {
      endpoint: 'animes',
      contentId,
      queries,
    },
  );
};
