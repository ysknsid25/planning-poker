// ─── Branded Types ────────────────────────────────────────────────────────────

const userIdBrand = Symbol();
export type UserId = string & { [userIdBrand]: unknown };
export const createUserId = (raw: string): UserId => raw as UserId;

const roomIdBrand = Symbol();
export type RoomId = string & { [roomIdBrand]: unknown };
export const createRoomId = (raw: string): RoomId => raw as RoomId;

// ─── Template Literal Types ───────────────────────────────────────────────────

export type Email = `${string}@${string}.${string}`;
export type AvatarUrl = `https://${string}` | `http://${string}`;

// ─── Models ───────────────────────────────────────────────────────────────────

/**
 * ユーザーを表すモデル。
 * Firebase Authentication の uid を id として利用します。
 */
export interface User {
  id: UserId;
  email: Email;
  name: string;
  avatarUrl: AvatarUrl;
}

/**
 * ポーカールームを表すモデル。
 */
export interface Room {
  id: RoomId;
  name: string;
  createdUserId: UserId;
}

/**
 * UserRoom のステータス。
 * - join   : 参加中
 * - leave  : 退出済み
 * - invite : 招待中（まだ承諾していない）
 */
export type UserRoomStatus = "join" | "leave" | "invite";

/**
 * User と Room を紐づける中間モデル。
 * Firestore では userRooms コレクションに保存します。
 */
export interface UserRoom {
  roomId: RoomId;
  userId: UserId;
  status: UserRoomStatus;
  selectedPoint: number | null; // 未選択の場合は null
}
