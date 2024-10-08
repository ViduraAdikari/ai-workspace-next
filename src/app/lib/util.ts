import {avatars, IconsName} from "@/const/avatarIcons";
import {AvatarIcon, IGuest} from "@/store/features/workspace/workspaceReducerTypes";

/**
 * is the element in the const array
 * @param values
 * @param val
 */
export function isInConstArray<T>(values: readonly T[], val: any): val is T {
  return values.includes(val);
}

/**
 * creates an Avatar with random icon and color from our icon, color library and returns.
 */
export const createAvatar = (): [IconsName, AvatarIcon] => {
  const random = Math.floor(Math.random() * Object.keys(IconsName).length);
  const iconName: IconsName = Object.keys(IconsName)[random] as IconsName;
  return [iconName, avatars[iconName]];
}

/**
 * creates guest with random avatar
 * @param nickname
 */
export const createGuest = (nickname: string): IGuest => {
  const [iconName, avatarIcon] = createAvatar();
  return {id: new Date().getTime() + '', nickname: nickname, iconName: iconName, avatar: avatarIcon};
}

