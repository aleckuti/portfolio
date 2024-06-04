import Image from 'next/image'

const FeatureBanner = () => {
  return (
    <section className='bg-black text-white'>
        {/* Desktop screen  */}
        <div className='hidden lg:flex items-center gap-5 py-5'>
            <h3 className='uppercase text-[23px] font-bold'>development</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>security</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>strategy</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>deliverability</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>branding</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>design</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>efficacy</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[23px] font-bold'>testing</h3>
        </div>
        
        {/* Ipad screen  */}
        <div className='hidden md:flex lg:hidden items-center gap-5 py-5'>
            <h3 className='uppercase text-[23px] font-bold'>dev</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[20px] font-bold'>security</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[20px] font-bold'>strategy</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[20px] font-bold'>design</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[20px] font-bold'>branding</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[20px] font-bold'>efficacy</h3>
        </div>

        {/* Mobile screen  */}
        <div className='md:hidden lg:hidden flex items-center gap-5 py-5'>
            <h3 className='uppercase text-[15px] font-bold'>dev</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[15px] font-bold'>security</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[15px] font-bold'>design</h3>
            <div><Image src="/icon2.png" width={20} height={20} alt='icon' /></div>
            <h3 className='uppercase text-[15px] font-bold'>branding</h3>
        </div>
    </section>
  )
}

export default FeatureBanner