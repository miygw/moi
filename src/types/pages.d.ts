import { ParsedUrlQuery } from 'querystring';

/**
 * [slug].tsx の slug に対応する文字列を保持するオブジェクトを表すインターフェース。
 */
interface SlugParams extends ParsedUrlQuery {
  slug: string;
}
