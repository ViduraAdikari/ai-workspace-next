import baggage from "../assets/avatar/baggage-1.webp";
import beachPalmSunbed from "../assets/avatar/beach-palm-sunbed.webp";
import beachSunbed from "../assets/avatar/beach-sunbed.webp";
import fastFoodBurgerDrink from "../assets/avatar/fast-food-burger-drink.webp";
import colosseum from "../assets/avatar/landmark-colosseum.webp";
import londonEye from "../assets/avatar/landmark-london-eye.webp";
import londonTower from "../assets/avatar/landmark-london-tower.webp";
import merlion from "../assets/avatar/landmark-merlion-statue.webp";
import mountain from "../assets/avatar/landmark-mountain.webp";
import windmill from "../assets/avatar/landmark-netherlands-windmill-1.webp";
import battery from "../assets/avatar/renewable-energy-battery-leaf.webp";
import windTurbine from "../assets/avatar/renewable-energy-wind-turbine-2.webp";
import {BackgroundColors} from "./values";
import {AvatarIcon} from "@/store/features/workspace/workspaceReducerTypes";

const avatarIcons: AvatarIcon[] = [
  {icon: baggage, color: BackgroundColors.MintLeaf, alt: "Baggage"},
  {icon: beachPalmSunbed, color: BackgroundColors.BrightYellow, alt: "Beach Palm Tree and Sunbed"},
  {icon: beachSunbed, color: BackgroundColors.ExodusFruit, alt: "Beach Sunbed"},
  {icon: fastFoodBurgerDrink, color: BackgroundColors.RobinsEggBlue, alt: "Fast Food Burger Drink"},
  {icon: colosseum, color: BackgroundColors.SizzlingRed, alt: "landmark-colosseum"},
  {icon: londonEye, color: BackgroundColors.YueGuangLanBlue, alt: "London Flyer"},
  {icon: londonTower, color: BackgroundColors.ReefEncounter, alt: "London Tower"},
  {icon: merlion, color: BackgroundColors.IceLandPoppy, alt: "Merlion"},
  {icon: mountain, color: BackgroundColors.Dupain, alt: "Mountain"},
  {icon: windmill, color: BackgroundColors.VeryBerry, alt: "Windmill"},
  {icon: battery, color: BackgroundColors.TurkishAqua, alt: "Renewable Energy Battery"},
  {icon: windTurbine, color: BackgroundColors.RadiantYellow, alt: "Renewable Energy Wind Turbine"},
];

export enum IconsName {
  baggage = "baggage",
  beachPalmSunbed = "beachPalmSunbed",
  beachSunbed = "beachSunbed",
  fastFoodBurgerDrink = "fastFoodBurgerDrink",
  colosseum = "colosseum",
  londonEye = "londonEye",
  londonTower = "londonTower",
  merlion = "merlion",
  mountain = "mountain",
  windmill = "windmill",
  battery = "battery",
  windTurbine = "windTurbine",
}

const avatars: Record<IconsName, AvatarIcon> = {
  baggage: avatarIcons[0],
  beachPalmSunbed: avatarIcons[1],
  beachSunbed: avatarIcons[2],
  fastFoodBurgerDrink: avatarIcons[3],
  colosseum: avatarIcons[4],
  londonEye: avatarIcons[5],
  londonTower: avatarIcons[6],
  merlion: avatarIcons[7],
  mountain: avatarIcons[8],
  windmill: avatarIcons[9],
  battery: avatarIcons[10],
  windTurbine: avatarIcons[11],
}

export {avatarIcons, avatars};
