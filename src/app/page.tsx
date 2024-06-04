import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolut w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Buat Momen Foto <span className="bg-cyan-600 px-2 text-white">Terbaikmu</span> Jadi Nyata
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Ingin jadikan setiap foto di <span className="font-semibold">Gallery</span> kamu tak terlupakan? Cetak aja di RidoCasing. Kini lebih mudah dan praktis.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex flex-gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                    Kualitas Terbaik, Bahan Awet.
                  </li>
                  <li className="flex flex-gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />Garansi 5 Tahun.
                  </li>
                  <li className="flex flex-gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                    Support Semua Jenis HP.
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 ">
                <div className="flex -space-x-4">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="user image" />
                  <img className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" alt="user image" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> pelanggan telah membuktikan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" alt="" className="absolute w-40 lg:w-50 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" alt="" className="absolute w-20 -left-6 -bottom-6 select-none" />
              <Phone className="w-64 " imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* END HERO SECTION */}

      {/* VALUE REVIEW SECT */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
              Lihat Testimoni{" "}
              <span className="relative px-2">
                Pelanggan <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-cyan-500" />
              </span>{" "}
              Kami
            </h2>
            <img src="/snake-2.png" alt="" className="w-24 order-0 lg:order-2" />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2 ">
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Awalnya saya ragu untuk beli casing disini, tapi saya memberanikan diri. Saya membeli casing disini sudah sejak 6 bulan dan masih bagus. Biasanya di toko lain, sudah pudar dan rusak. Tapi disini masih aman. <span className="p-0.5 bg-slate-800 text-white">Gambar jernih</span> dan kualitas tinggi. Casingnya juga nyaman di genggam. Terbaiklah pokoknya."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-1.png" alt="user" />
                <div className="flex flex-col">
                  <p className="font-semibold"> Asep </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-cyan-600" />
                    <p className="text-sm">Aslinya dua orang</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2 ">
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                <Star className="h-5 w-5 text-cyan-600 fill-cyan-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Bolak-balik saya sering beli casing hp online dan tidak ada satupun yang awet. Biasanya sih casing lain itu mudah berubah warna dan molor, tapi disini masih tahan {" "}
                  <span className="p-0.5 bg-slate-800 text-white">bahkan setelah 1 tahun.</span>Pelayanan cepat, cs ramah, top deh pokoknya. Jangan ragu deh beli disini."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-4.jpg" alt="user" />
                <div className="flex flex-col">
                  <p className="font-semibold"> Mas Purnomo </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-cyan-600" />
                    <p className="text-sm">Asal Tegal</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second user review */}
          </div>
        </MaxWidthWrapper>
        {/* animated review */}
        <div className="pt-16">
          <Reviews />
        </div>
        {/* animated review */}
      </section>
      {/* VALUE REVIEW SECT */}

      {/* Get Your Case dan button */}
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
              Upload fotomu & dapatkan casingmu. <span className="relative px-2 bg-cyan-600 text-white">Sesimpel itu !</span> wow.
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" alt="" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full " />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          {/* Tagline dan centang */}
          <ul className="mx-auto mt-12 max-w-prose sm:text-large space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-cyan-600 inline mr-1.5 " />
              Bahan dari Silicone Berkualitas
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-cyan-600 inline mr-1.5 " />
              Tahan Goresan dan Sidik Jari
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-cyan-600 inline mr-1.5 " />
              Mendukung Wireless Charging
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-cyan-600 inline mr-1.5 " />Garansi 5 Tahun !
            </li>
            {/* Tagline dan centang */}
            {/* Button komponen */}
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Buat Casingmu Sekarang
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
            {/* Button komponen */}
          </ul>
        </MaxWidthWrapper>
      </section>
      {/* Get Your Case dan button */}
    </div>
  );
}
