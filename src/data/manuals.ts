import IconWasher from "~/components/IconWasher";
import IconRiceCooker from "~/components/IconRiceCooker";
import IconKettle from "~/components/IconKettle";
import IconMicrowave from "~/components/IconMicrowave";
import IconSpeaker from "~/components/IconSpeaker";
import MANUAL_WASHER from "~/assets/manuals/washer.pdf";
import MANUAL_RICE_COOKER from "~/assets/manuals/rice-cooker.pdf";
import MANUAL_MICROWAVE from "~/assets/manuals/microwave.pdf";
import MANUAL_KETTLE from "~/assets/manuals/kettle.pdf";
import MANUAL_SPEAKER from "~/assets/manuals/speaker.pdf";

export const MANUALS = [
  {
    type: "家電",
    manuals: [
      { label: "洗濯機", file: MANUAL_WASHER, icon: IconWasher },
      { label: "炊飯器", file: MANUAL_RICE_COOKER, icon: IconRiceCooker },
      { label: "電子レンジ", file: MANUAL_MICROWAVE, icon: IconMicrowave },
      { label: "ケトル", file: MANUAL_KETTLE, icon: IconKettle },
    ],
  },
  {
    type: "機器",
    manuals: [
      { label: "Anker SoundCore 2", file: MANUAL_SPEAKER, icon: IconSpeaker },
    ],
  },
];
