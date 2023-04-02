import Image from 'next/image'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h[400px] lg:h[500px] xl:h[600px] 2xl:h[700px]'>
      <Image src="https://images.unsplash.com/photo-1526452292898-227ed70e55b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt='' layout='fill' objectFit='cover' objectPosition=''/>
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not Sure where to go? Perfect....</p>
        <button className='text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I&rsquo;m Flexible</button>
      </div>
    </div>
  )
}

export default Banner