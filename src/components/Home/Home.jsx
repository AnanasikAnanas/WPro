import ArrowUp from '../Icons/ArrowUp/ArrowUp'

export default function Home() {
  return (
    <section className="container flex flex-col gap-10 justify-end h-[884px] relative">
      <img src="/image 1.png" alt="" className='absolute -top-20 right-0'/>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-extrabold">
          W-Pro <br/>Smart Keyboard - Power,<br/> speed and innovation<br/> in one device
        </h1>
        <div className="p-9 bg-black rounded-[40px] flex flex-col gap-4 text-white text-xl max-w-[420px] break-all about-us">
          <p className='text-center text-3xl'>about us</p>
          <p>DSADADAR5T4GFVGTRRGFnhjnthgngngnhgnghn</p>
          <p>DSADADAR5T4GFVGTRRGFnhjnthgngngnhgnghn</p>
          <p>DSADADAR5T4GFVGTRRGFnhjnthgngngnhgnghn</p>
          <p>DSADADAR5T4GFVGTRRGFnhjnthgngngnhgnghn</p>
        </div>
      </div>
      <div className='flex gap-2.5 items-center'>
        <button className='px-8 py-6 bg-black rounded-2xl text-white text-5xl hover:bg-[#323232] duration-300 font-medium'>Buy now</button>
        <button className='p-3.5 rounded-full bg-black hover:bg-[#323232] duration-300'><ArrowUp/></button>
      </div>
    </section>
  );
}
