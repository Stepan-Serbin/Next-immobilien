import Image from "next/image";

const avatarUrl =
  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-svg-download-png-456327.png";

export default function Me() {
  return (
    <section className="px-20 py-10 ">
      <h2 className="p-3 text-3xl md:text-5xl lg:text-7xl tracking-widest ">
        John Smith
      </h2>
      <div className="grid grid-cols-4 p-6">
        <Image
          className="md:col-start-3"
          src={avatarUrl}
          alt="avatar"
          width={200}
          height={200}
        />
      </div>

      <p className="max-w-180 text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        maiores alias nam necessitatibus dolorum dicta quaerat, minima aliquid
        magnam architecto possimus tempore similique ut dolores repellat autem
        id laudantium quisquam!
      </p>
      {/* <Image src="/avatar.webp" alt="avatar" width={200} height={200} /> */}
      {/* <Image src={avatarUrl} alt="avatar" width={200} height={200} unoptimized/> */}
      {/* <Avatar /> */}

      <div className="min-h-16 m-12">
        <a
          href="mailto:alisher@gmail.com"
          className="border px-8 py-5 hover:bg-[#59b0df] rounded-4xl transition"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

// static assets
