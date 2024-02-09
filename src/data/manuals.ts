import MANUAL_WASHER from "~/assets/manuals/washer.pdf";
import MANUAL_REFRIGERATOR from "~/assets/manuals/refrigerator.pdf";
import MANUAL_RICE_COOKER from "~/assets/manuals/rice-cooker.pdf";
import MANUAL_MICROWAVE from "~/assets/manuals/microwave.pdf";
import MANUAL_KETTLE from "~/assets/manuals/kettle.pdf";
import MANUAL_SPEAKER from "~/assets/manuals/speaker.pdf";
import MANUAL_DVD_DRIVE from "~/assets/manuals/dvd-drive.pdf";
import MANUAL_HAIRDRYER from "~/assets/manuals/hairdryer.pdf";
import MANUAL_HAIR_ICON from "~/assets/manuals/hair-iron.pdf";
import MANUAL_THERMOMETER from "~/assets/manuals/thermometer.pdf";
import MANUAL_CLOCK from "~/assets/manuals/clock.pdf";
import MANUAL_CAIRO from "~/assets/manuals/cairo.pdf";
import IconWasher from "~/components/Icon/IconWasher";
import IconRefrigerator from "~/components/Icon/IconRefrigerator";
import IconRiceCooker from "~/components/Icon/IconRiceCooker";
import IconKettle from "~/components/Icon/IconKettle";
import IconMicrowave from "~/components/Icon/IconMicrowave";
import IconSpeaker from "~/components/Icon/IconSpeaker";
import IconDVDDrive from "~/components/Icon/IconDVDDrive";
import IconHairdryer from "~/components/Icon/IconHairdryer";
import IconHairIron from "~/components/Icon/IconHairIron";
import IconThermometer from "~/components/Icon/IconThermometer";
import IconClock from "~/components/Icon/IconClock";
// import IconCairo from "~/components/Icon/IconCairo";

export const MANUALS = [
  {
    type: "家電",
    manuals: [
      { label: "冷蔵庫", file: MANUAL_REFRIGERATOR, icon: IconRefrigerator },
      { label: "炊飯器", file: MANUAL_RICE_COOKER, icon: IconRiceCooker },
      { label: "電子レンジ", file: MANUAL_MICROWAVE, icon: IconMicrowave },
      { label: "ケトル", file: MANUAL_KETTLE, icon: IconKettle },
      { label: "洗濯機", file: MANUAL_WASHER, icon: IconWasher },
    ],
  },
  {
    type: "機器",
    manuals: [
      { label: "Anker SoundCore 2", file: MANUAL_SPEAKER, icon: IconSpeaker },
      { label: "DVDドライブ", file: MANUAL_DVD_DRIVE, icon: IconDVDDrive },
      { label: "ドライヤー", file: MANUAL_HAIRDRYER, icon: IconHairdryer },
      { label: "ヘアアイロン", file: MANUAL_HAIR_ICON, icon: IconHairIron },
      { label: "体温計", file: MANUAL_THERMOMETER, icon: IconThermometer },
      { label: "卓上デジタル時計", file: MANUAL_CLOCK, icon: IconClock },
      { label: "カイロ", file: MANUAL_CAIRO, icon: IconThermometer },
    ],
  },
];
