import React from "react";
import { workData } from "@/assets/assets";
import Image from "next/image";

export default function SipetikDetail({ params }) {
  const { slug } = params;
  const project = workData.find((p) => p.id === slug);

  if (!project) {
    return <div>Project Not Found</div>;
  }
  return (
    <div>
      <div>
        <Image></Image>
      </div>
      <div>
        <div>
          <h1>Sipetik</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            earum maxime modi maiores, doloremque in qui accusantium quam
            placeat aut aspernatur iste unde alias quia, quisquam minima at?
            Amet magnam laudantium aliquam culpa odit illo optio, laboriosam
            vel, repellat maxime velit? Laudantium culpa sit molestias, nam
            animi quidem aliquam fugiat quas consequatur ab, optio deleniti
            magnam accusantium dolore eligendi reiciendis magni impedit quos
            eius nobis asperiores officiis. Quisquam officiis enim distinctio ab
            aut, labore natus adipisci eaque corporis recusandae ipsam
            temporibus autem dolorum, veniam accusantium totam dolore doloremque
            vitae, vel quod? Consequatur, vitae doloremque! Corrupti dicta
            numquam nobis id repellat?
          </p>
        </div>

        <div>
          <button>See on Github</button>
        </div>
      </div>
    </div>
  );
}
