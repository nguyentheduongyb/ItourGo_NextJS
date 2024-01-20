import Link from 'next/link';
import { BsFillSunFill } from 'react-icons/bs';
import { FaStar } from "react-icons/fa"

async function getData() {
        const res = await fetch('https://backend-itourgo.onrender.com/api/tour')
        if (!res.ok) {
                throw new Error('Failed to fetch data')
        }
        return res.json()
}



const Hotel = async () => {
        const data = await getData()

        return (
                <div>
                        <section className='my-8'>
                                <div className='container'>
                                        <div className='relative w-full pt-[80%] md:pt-[26.5%] rounded-2xl bg-center bg-no-repeat bg-cover flex justify-center' style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
                                                <div className='absolute w-full h-full left-0 top-0 p-12 md:p-20 space-y-6 text-white'>
                                                        <h5 className='text-3xl font-bold capitalize line-clamp-1'>Ưu đãi kì du lịch của bạn ở đây</h5>
                                                        <p className='line-clamp-2'>Mùa ưu đãi vẫn chưa kết thúc. Nhận ngay ưu đãi đến 50%</p>
                                                        <button className='text-black font-medium rounded-full px-6 py-2 bg-white'>Tìm hiểu ngay</button>
                                                </div>
                                        </div>
                                        <div className='mt-[-80px] relative w-full'>
                                                <div className='w-full bottom-[-40%]'>
                                                        <div className='mx-auto rounded-2xl w-[94%]'>
                                                                <div className='flex gap-4 w-full overflow-auto scrollbar-hide pb-4 md:px-8'>
                                                                        <Link href="/search/aaaa" className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to 50% off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">Europe Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                        <Link href="/search/aaaa" className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/Rz5Mdv.png" alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to 50% off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">Europe Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                        <Link href="/search/aaaa" className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/C3MOCS.png" alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to 50% off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">Italia Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                        <Link href="/search/aaaa" className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/ypgiOX.png" alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to 50% off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">Japan Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                        <Link href="/search/aaaa" className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/hbdQyn.png" alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to 50% off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">Peru Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <p className="text-2xl font-medium uppercase mb-6 text-center">Các tour nổi bật trong tháng</p>
                                <div className='px-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                                        <Link className='relative w-full rounded overflow-hidden' href="">
                                                <img src="https://cdn.tourradar.com/s3/tour/360x210/216153_633ffb37421ae.jpg" className='w-full' alt="" />
                                                <div className='absolute w-full h-full left-0 top-0 flex items-center justify-center text-center'>
                                                        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.15)]'></div>
                                                        <div className='z-10 space-y-3'>
                                                                <h6 className='uppercase text-white font-medium text-xl'>Miền tây trong ngày</h6>
                                                                <p className='text-white'>Giá: 450.000 VNĐ</p>
                                                                <button className='py-1 px-3 rounded-full border bg-transparent hover:bg-[var(--primary-color)] hover:text-white font-medium text-[#ccc]'>Đặt ngay</button>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link className='relative w-full rounded overflow-hidden' href="">
                                                <img src="https://cdn.tourradar.com/s3/tour/360x210/246976_64928ab093294.jpg" className='w-full' alt="" />
                                                <div className='absolute w-full h-full left-0 top-0 flex items-center justify-center text-center'>
                                                        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.15)]'></div>
                                                        <div className='z-10 space-y-3'>
                                                                <h6 className='uppercase text-white font-medium text-xl'>Miền tây trong ngày</h6>
                                                                <p className='text-white'>Giá: 450.000 VNĐ</p>
                                                                <button className='py-1 px-3 rounded-full border bg-transparent hover:bg-[var(--primary-color)] hover:text-white font-medium text-[#ccc]'>Đặt ngay</button>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link className='relative w-full rounded overflow-hidden' href="">
                                                <img src="https://cdn.tourradar.com/s3/tour/360x210/152897_5e5f03dc274b1.jpg" className='w-full' alt="" />
                                                <div className='absolute w-full h-full left-0 top-0 flex items-center justify-center text-center'>
                                                        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.15)]'></div>
                                                        <div className='z-10 space-y-3'>
                                                                <h6 className='uppercase text-white font-medium text-xl'>Miền tây trong ngày</h6>
                                                                <p className='text-white'>Giá: 450.000 VNĐ</p>
                                                                <button className='py-1 px-3 rounded-full border bg-transparent hover:bg-[var(--primary-color)] hover:text-white font-medium text-[#ccc]'>Đặt ngay</button>
                                                        </div>
                                                </div>
                                        </Link>
                                </div>
                        </section>
                        <section className='my-8'>
                                <p className="text-2xl font-medium uppercase mb-6 text-center">Các tour chính của chúng tôi</p>
                                <div className='container grid grid-cols-2 md:grid-cols-4 gap-4'>
                                        {data.map((item: any, index: number) => (
                                                <Link key={index} className='relative w-full rounded overflow-hidden pt-[100%] first:row-span-2 first:col-span-2 bg-no-repeat bg-center bg-cover' href="" style={{ backgroundImage: 'url("https://tourbonphuong.com/upload/hinhanh/564341937216996_750x500.jpg")' }}>
                                                        <div className='absolute w-full h-full left-0 top-0 flex items-center justify-center text-center'>
                                                                <div className='absolute w-full h-full bg-[rgba(0,0,0,0.15)]'></div>
                                                                <div className='z-10 space-y-3'>
                                                                        <h6 className='uppercase text-white font-medium text-xl'>{item.name}</h6>
                                                                        <p className='text-white'>Giá: {item.expectedCost} VNĐ</p>
                                                                        <button className='py-1 px-3 rounded-full border bg-transparent hover:bg-[var(--primary-color)] hover:text-white font-medium text-[#ccc]'>Đặt ngay</button>
                                                                </div>
                                                        </div>
                                                </Link>
                                        ))}
                                </div>
                        </section>

                        <section className="container rounded-xl p-4 bg-[#E6F4FD] flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-2/5 flex flex-col gap-3">
                                        <h1 className="font-bold text-xl">Cuộc phiêu lưu có tổ chức: Chúng là gì?</h1>
                                        <div className='space-y-3 text-[15px] pr-6'>
                                                <p>Trải nghiệm du lịch nhiều ngày được tổ chức liền mạch bởi một nhà điều hành đáng tin cậy—mọi thứ từ hậu cần, bữa ăn, trải nghiệm cho đến hướng dẫn viên thân thiện. Tất cả những gì bạn phải làm là chọn chuyến phiêu lưu, xách ba lô lên và đi.</p>
                                                <p>Bắt tay vào một cuộc phiêu lưu có tổ chức mang tính biến đổi ngay hôm nay. Chọn từ hơn 50.000 tùy chọn thông qua 2.500 nhà khai thác đáng tin cậy trên nền tảng của chúng tôi.</p>
                                        </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-4">
                                        <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
                                                <div className='rounded-xl w-full pt-[60%] md:pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/xoOlJd.jpg")' }}></div>
                                                <h6 className='font-medium'>Cuộc phiêu lưu nhóm</h6>
                                                <p className='text-sm'>Tham gia một nhóm và xây dựng tình bạn lâu dài.</p>
                                                <p className="font-medium text-sm text-[color:var(--primary-color)]">Khám phá</p>
                                        </Link>
                                        <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
                                                <div className='rounded-xl w-full pt-[60%] md:pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/R2Shk8.png")' }}></div>
                                                <h6 className='font-medium'>Cuộc phiêu lưu riêng tư</h6>
                                                <p className='text-sm'>Du lịch độc quyền với nhóm của riêng bạn.</p>
                                                <p className="font-medium text-sm text-[color:var(--primary-color)]">Khám phá</p>
                                        </Link>
                                        <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
                                                <div className='rounded-xl w-full pt-[60%] md:pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/bz3l7r.png")' }}></div>
                                                <h6 className='font-medium'>Cuộc phiêu lưu cá nhân</h6>
                                                <p className='text-sm'>Tùy chỉnh hành trình hiện có hoặc tạo hành trình của riêng bạn.</p>
                                                <p className="font-medium text-sm text-[color:var(--primary-color)]">Khám phá</p>
                                        </Link>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col-reverse md:flex-row gap-1 items-center text-center md:items-start md:text-start">
                                                <div className='flex flex-col gap-3 flex-1'>
                                                        <h4 className='font-bold text-xl capitalize'>Du lịch bền vững</h4>
                                                        <p className="text-sm">Phiêu lưu bền vững cùng TourRadar. Chúng tôi cam kết thực hiện việc đi lại có ý thức, từ những người điều hành có trách nhiệm đến Kế hoạch hành động vì khí hậu và các phép đo lượng carbon. <Link className='text-[var(--primary-color)]' href="">Cam kết của chúng tôi</Link></p>
                                                </div>
                                                <div className="w-40 h-[120px] bg-center bg-contain bg-no-repeat" style={{
                                                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='87' fill='none'%3E%3Ccircle cx='39.5' cy='31.5' r='31.5' fill='%230A7BBD' opacity='.3'/%3E%3Cg clipPath='url(%23clip0_2205:13708)'%3E%3Cpath fill='%23fff' d='M19.5 26.5h-10c-.17 2.5-.4 8.3 0 11.5.5 4 2.5 7.5 5.5 12.5 2.4 4 10.33 8.67 14 10.5 0-1.33-.1-4.6-.5-7-.4-2.4 1.5-6 2.5-7.5.67-.33 2.5-1.8 4.5-5s.5-6.67-.5-8c-1-1.17-3.3-3.8-4.5-5-1.2-1.2-4.17-1.83-5.5-2h-5.5zM53 11h8.5l4.5 6c1.5 2 2.5 5.5 3.5 10.5.8 4 0 9-.5 11h-5.5c-1.6 0-3.33-2-4-3-1.17-1.67-3.6-5.2-4-6-.5-1-2.5-4.5-5-6a7.69 7.69 0 00-5-1c-1.83.17-5.5-.7-5.5-5.5s3.67-6 5.5-6H53z'/%3E%3Cpath fill='%232C3E50' d='M39.35 63.9A31.8 31.8 0 019.9 44.16a32.02 32.02 0 016.9-34.81 31.84 31.84 0 0154.4 22.59c0 8.47-3.36 16.6-9.33 22.59a31.82 31.82 0 01-22.53 9.35zm0-61.24a29.15 29.15 0 00-26.98 18.08 29.36 29.36 0 006.33 31.91 29.18 29.18 0 0049.86-20.7c0-7.77-3.08-15.22-8.56-20.71a29.17 29.17 0 00-20.65-8.58z'/%3E%3Cpath fill='%232C3E50' d='M28.73 62a1.33 1.33 0 01-1.33-1.33v-8.39c0-2.27.83-4.47 2.34-6.17l3.6-4.1a6.67 6.67 0 00-.26-9.13l-2.97-2.98a6.61 6.61 0 00-4.7-1.95H9.27a1.33 1.33 0 01-1.33-1.33 1.33 1.33 0 011.33-1.33H25.4a9.14 9.14 0 016.58 2.66l2.98 2.98a9.33 9.33 0 01.37 12.78l-3.48 4.16a6.64 6.64 0 00-1.67 4.41v8.39A1.36 1.36 0 0128.73 62zm37.44-22.07a9.22 9.22 0 01-7.73-4.15l-5.9-8.87a6.64 6.64 0 00-5.52-2.95h-1.14a7.3 7.3 0 01-7.3-7.32 7.33 7.33 0 017.3-7.32h15.4a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-15.4a4.64 4.64 0 00-4.64 4.66 4.66 4.66 0 004.64 4.66h1.14a9.2 9.2 0 017.73 4.15l5.9 8.86a6.72 6.72 0 005.52 2.96h3a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-3zM9.3 87a1.27 1.27 0 01-1.04-.5l-5.31-6.7a13.33 13.33 0 01-2.92-8.33V57.7a5.33 5.33 0 015.3-5.32 5.3 5.3 0 015.32 5.33v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a2.67 2.67 0 00-2.65-2.67 2.65 2.65 0 00-2.66 2.67v13.76c0 2.42.83 4.77 2.34 6.65l5.3 6.71A1.33 1.33 0 019.3 87z'/%3E%3Cpath fill='%232C3E50' d='M22.57 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.1-.61-4.16-1.78-5.91-.55-.56-1.2-1.23-1.78-1.87-3.87-4.15-4.48-4.52-6-3.51a2.37 2.37 0 00-.8 3.06l3.54 5.91a1.34 1.34 0 01-1.46 2c-.35-.1-.64-.31-.83-.62l-3.58-6.01a5.07 5.07 0 011.67-6.55c3.53-2.37 5.76 0 9.4 3.91l1.89 2.03a13.34 13.34 0 012.39 7.56v7.98a1.33 1.33 0 01-1.33 1.33zM67.7 87c-.3 0-.58-.1-.82-.3a1.33 1.33 0 01-.2-1.86l5.3-6.7a10.67 10.67 0 002.34-6.63V57.7a2.67 2.67 0 00-2.66-2.66 2.65 2.65 0 00-2.65 2.67v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a5.33 5.33 0 015.31-5.33 5.3 5.3 0 015.31 5.33V71.5a13.5 13.5 0 01-2.9 8.3l-5.3 6.68a1.28 1.28 0 01-1.06.5z'/%3E%3Cpath fill='%232C3E50' d='M54.43 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.63.78-5.2 2.23-7.38l2.05-2.2c3.66-3.92 5.87-6.3 9.4-3.92a5.03 5.03 0 011.72 6.47l-3.63 6.1a1.33 1.33 0 11-2.29-1.39l3.59-5.99a2.37 2.37 0 00-.85-2.98c-1.52-.99-2.13-.64-6 3.51L57.4 71.7a10.67 10.67 0 00-1.64 5.73v7.98a1.33 1.33 0 01-1.33 1.33z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2205:13708'%3E%3Cpath fill='%23fff' d='M0 0h77v87H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`
                                                }}></div>
                                        </div>
                                        <div className="flex flex-col-reverse md:flex-row gap-1 items-center text-center md:items-start md:text-start">
                                                <div className='flex flex-col gap-3 flex-1'>
                                                        <h4 className='font-bold text-xl capitalize'>An tâm</h4>
                                                        <p className="text-sm">Với dịch vụ chăm sóc khách hàng 24/7, điều kiện đặt chỗ linh hoạt và các lựa chọn bảo hiểm phong phú, chúng tôi luôn sẵn sàng hỗ trợ bạn khi kế hoạch thay đổi. <Link className='text-[var(--primary-color)]' href="">Tùy chọn của tôi</Link></p>
                                                </div>
                                                <div className="w-40 h-[120px] bg-center bg-contain bg-no-repeat" style={{
                                                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='73' height='104' fill='none'%3E%3Cg clip-path='url(%23clip0_2205:13720)'%3E%3Cpath fill='%230A7BBD' d='M46 59l-9 9.5-.5.5-7.5-8c-3.33-2-9.3-7.5-6.5-13.5 2.8-6 8.17-4.83 10.5-3.5l3.5 3 4-3c1.67-1 5.9-1.9 9.5 2.5 3.6 4.4-1.17 10.17-4 12.5z' opacity='.3'/%3E%3Cpath fill='%232C3E50' fill-rule='evenodd' d='M43.86 44.29a5.89 5.89 0 00-4.18 1.74l-2.07 2.08c-.6.6-1.56.6-2.16 0l-2.08-2.08a5.7 5.7 0 00-1.5-1.11 5.95 5.95 0 00-6.86 9.5l.03.04L36.5 66.6h.03l11.49-12.15.03-.04a5.89 5.89 0 001.11-6.82v-.03a5.4 5.4 0 00-1.1-1.52l-.02-.02a5.9 5.9 0 00-4.18-1.74zm-3.43-2.36a8.93 8.93 0 0111.46 4.3 8.95 8.95 0 01-1.68 10.34L38.7 68.75a3.07 3.07 0 01-4.37 0L22.85 56.56a8.94 8.94 0 01-1.67-10.35 9.01 9.01 0 0112.04-4.03c.87.44 1.65 1 2.32 1.7l.99.99.99-1a8.95 8.95 0 012.9-1.95z' clipRule='evenodd'/%3E%3Cpath fill='%232C3E50' fill-rule='evenodd' d='M6.82 27.09a78.69 78.69 0 0159.36 0h.02a6.15 6.15 0 013.76 5.68v23.3a39.1 39.1 0 01-26.01 36.38l-3.39 1.24c-2.62.99-5.5.99-8.12 0l-3.39-1.24a38.97 38.97 0 01-26-36.38V32.76A6.17 6.17 0 016.8 27.1l.02-.01zm-.74 5.68v23.28a36.05 36.05 0 0023.99 33.53h.02l3.42 1.26c1.93.72 4.05.72 5.99 0l3.43-1.26a35.93 35.93 0 0023.99-33.53V32.77a3.11 3.11 0 00-1.9-2.86 75.65 75.65 0 00-57.05 0 3.1 3.1 0 00-1.89 2.86z' clipRule='evenodd'/%3E%3Cpath fill='%232C3E50' d='M13.69 15.6H1.52A1.52 1.52 0 01.45 13c.28-.28.67-.45 1.07-.45H13.7a1.52 1.52 0 011.07 2.6c-.28.3-.67.45-1.07.45z'/%3E%3Cpath fill='%232C3E50' d='M7.6 21.7a1.52 1.52 0 01-1.52-1.52V7.98a1.53 1.53 0 012.6-1.07c.28.28.44.67.44 1.07v12.2A1.53 1.53 0 017.6 21.7zm63.88 76.2H59.31a1.52 1.52 0 01-1.07-2.6c.28-.28.67-.44 1.07-.44h12.17a1.52 1.52 0 011.07 2.6c-.28.28-.67.44-1.07.44z'/%3E%3Cpath fill='%232C3E50' d='M65.4 104a1.52 1.52 0 01-1.53-1.53V90.28a1.53 1.53 0 012.6-1.08c.29.29.45.68.45 1.08v12.2A1.53 1.53 0 0165.4 104zM28.96 7.62h-9.13a1.52 1.52 0 01-1.07-2.6c.28-.29.67-.45 1.07-.45h9.13a1.52 1.52 0 011.07 2.6c-.28.3-.67.45-1.07.45z'/%3E%3Cpath fill='%232C3E50' d='M24.33 12.2a1.52 1.52 0 01-1.52-1.53V1.52a1.53 1.53 0 012.6-1.07c.28.28.44.67.44 1.07v9.15a1.53 1.53 0 01-1.52 1.52z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2205:13720'%3E%3Cpath fill='%23fff' d='M0 0h73v104H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`
                                                }}></div>
                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className='container'>
                                        <h2 className='font-bold text-xl'>Chương Trình Tour Nổi Bật</h2>
                                        <p>Tìm hiểu những gì đang diễn ra tại ITOURGO tin tức du lịch mới nhất đến ưu đãi đặc biệt của chúng tôi.</p>
                                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
                                                <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
                                                        <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/424x202/TeWjQf.png")' }}></div>
                                                        <div className='p-4 flex flex-1 flex-col justify-between'>
                                                                <div className='pb-3 flex flex-col gap-3'>
                                                                        <h5 className='capitalize font-bold'>Ưu đãi tháng 1 đang có hiệu lực</h5>
                                                                        <p className='text-sm line-clamp-3'>Thế giới đang chờ đợi bạn với mức giảm giá lên tới 60%!</p>
                                                                </div>
                                                                <p className='text-sm text-[color:var(--primary-color)]'>Xem ưu đãi</p>
                                                        </div>
                                                </Link>
                                                <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
                                                        <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/424x202/pFVse1.jpg")' }}></div>
                                                        <div className='p-4 flex flex-1 flex-col justify-between'>
                                                                <div className='pb-3 flex flex-col gap-3'>
                                                                        <h5 className='capitalize font-bold'>Kế hoạch hành động về khí hậu của chúng tôi</h5>
                                                                        <p className='text-sm line-clamp-3'>Chúng tôi mong muốn phát triển một công cụ đo lường tác động để đơn giản hóa việc đo lường và báo cáo lượng carbon. Chúng tôi cũng đặt mục tiêu cho tất cả các nhà khai thác đều có kế hoạch phát triển bền vững vào năm 2030.</p>
                                                                </div>
                                                                <p className='text-sm text-[color:var(--primary-color)]'>Tìm hiểu thêm</p>
                                                        </div>
                                                </Link>
                                                <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
                                                        <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/848x404/oH1PRW.jpg")' }}></div>
                                                        <div className='p-4 flex flex-1 flex-col justify-between'>
                                                                <div className='pb-3 flex flex-col gap-3'>
                                                                        <h5 className='capitalize font-bold'>Cuộc phiêu lưu riêng tư</h5>
                                                                        <p className='text-sm line-clamp-3'>Những cuộc phiêu lưu đặt sẵn, được cá nhân hóa</p>
                                                                </div>
                                                                <p className='text-sm text-[color:var(--primary-color)]'>Tìm hiểu thêm</p>
                                                        </div>
                                                </Link>
                                                <div className='gap-4 grid grid-rows-3'>
                                                        <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                                                                <div className='bg-[#E6F2F8] w-28 h-28 md:h-full flex items-center justify-center'>
                                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M41.7429 3.8168C36.1243 1.23729 30.0881 0.437064 24 0.499434C17.912 0.437064 11.8758 1.23728 6.25716 3.81678L6.25212 3.81914C5.58616 4.13007 5.0178 4.64913 4.61748 5.31199C4.21716 5.97484 4.00249 6.75233 4.00007 7.54811L4.90915 7.55146H4.00006L4 22.8247L4.00012 22.8363C4.05572 28.088 5.57727 33.194 8.35875 37.4629C11.1389 41.7297 15.0435 44.3054 19.5441 46.0513L21.5776 46.8773C23.1415 47.509 24.8601 47.5084 26.4241 46.8767L28.4559 46.0513C32.9566 44.3054 36.8612 41.7297 39.6413 37.4629C42.4228 33.194 43.9444 28.088 44 22.8363L44 7.55146L44 7.54811C43.9976 6.75233 43.7829 5.97484 43.3826 5.31199C42.9823 4.64914 42.4139 4.13007 41.7479 3.81912L41.7429 3.8168ZM5.81824 22.8188V7.5533C5.81974 7.14948 5.9288 6.75498 6.13195 6.41859C6.3349 6.08256 6.62284 5.81925 6.96023 5.66114C12.3535 3.18557 18.1476 2.43841 23.9914 2.49951L24.0087 2.49933C29.8524 2.43823 35.6466 3.18557 41.0399 5.66116C41.3772 5.81927 41.6652 6.08257 41.8681 6.41859C42.0713 6.75511 42.1804 7.15083 42.1818 7.5548L42.1818 22.8189C42.1295 27.6586 40.7268 32.3638 38.1635 36.2979C35.5991 40.2336 31.9971 42.5584 27.8452 44.1675L25.7951 45.0002C24.6362 45.4682 23.3632 45.468 22.2043 45L20.1677 44.1726L20.1549 44.1676C16.003 42.5585 12.4009 40.2336 9.83658 36.2979C7.27324 32.3638 5.87054 27.6585 5.81824 22.8188ZM23 12.1818C21.0581 12.1818 19.1599 12.7576 17.5453 13.8365C15.9307 14.9153 14.6723 16.4487 13.9292 18.2427C13.1861 20.0368 12.9916 22.0109 13.3705 23.9154C13.7493 25.82 14.6844 27.5694 16.0575 28.9425C17.4306 30.3156 19.18 31.2507 21.0846 31.6295C22.9891 32.0084 24.9632 31.8139 26.7573 31.0708C28.5513 30.3277 30.0847 29.0693 31.1635 27.4547C32.2424 25.8401 32.8182 23.9418 32.8182 22C32.8182 21.3975 33.3066 20.9091 33.9091 20.9091C34.5116 20.9091 35 21.3975 35 22C35 24.3734 34.2962 26.6934 32.9776 28.6668C31.6591 30.6402 29.7849 32.1783 27.5922 33.0865C25.3995 33.9948 22.9867 34.2324 20.6589 33.7694C18.3311 33.3064 16.193 32.1635 14.5147 30.4853C12.8365 28.807 11.6936 26.6688 11.2306 24.3411C10.7676 22.0133 11.0052 19.6005 11.9135 17.4078C12.8217 15.2151 14.3598 13.3409 16.3332 12.0224C18.3066 10.7038 20.6266 10 23 10C23.6025 10 24.0909 10.4884 24.0909 11.0909C24.0909 11.6934 23.6025 12.1818 23 12.1818ZM34.6177 11.2551C35.0685 11.6442 35.1294 12.3382 34.7537 12.8051L24.7748 25.208C24.4261 25.6414 23.9301 25.9196 23.3891 25.9851C22.8482 26.0506 22.3036 25.8985 21.8678 25.5602L21.8675 25.56L18.4251 22.8857C17.9556 22.521 17.8605 21.8312 18.2126 21.345C18.5646 20.8587 19.2306 20.7602 19.7001 21.1249L23.1423 23.7989L23.1423 23.7989L33.1213 11.396C33.4969 10.9291 34.1669 10.866 34.6177 11.2551Z" fill="#0969A1"></path></svg>
                                                                </div>
                                                                <div className='flex-1 p-3 flex flex-col justify-between'>
                                                                        <p className='text-[color:var(--secondary-color)]'>Bảo hiểm du lịch</p>
                                                                        <p className='text-[color:var(--primary-color)]'>Learn more</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                                                                <div className='bg-[#E6F2F8] w-28 h-28 md:h-full flex items-center justify-center'>
                                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M0.0078125 29.2109C0.0078125 28.1064 0.903243 27.2109 2.00781 27.2109H8.00781C9.11238 27.2109 10.0078 28.1064 10.0078 29.2109V43.2109C10.0078 44.3155 9.11238 45.2109 8.00781 45.2109H2.00781C0.903243 45.2109 0.0078125 44.3155 0.0078125 43.2109V29.2109ZM8.00781 29.2109H2.00781V43.2109H8.00781V29.2109Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M40.7155 33.1682C41.9966 32.7877 43.3638 32.8102 44.6316 33.2328C45.8995 33.6554 47.0067 34.4577 47.8033 35.5308C47.9795 35.7682 48.0416 36.0714 47.973 36.359C47.9043 36.6466 47.7119 36.889 47.4475 37.0213C43.3761 39.0569 40.2169 40.737 37.6437 42.1054C36.4264 42.7528 35.3403 43.3304 34.3508 43.8429C31.3111 45.4173 29.1495 46.3979 27.0345 46.7391C24.8775 47.087 22.8627 46.7576 20.1363 45.9445C18.5901 45.4833 16.7508 44.845 14.4778 44.0561C12.8013 43.4742 10.8888 42.8104 8.68404 42.0755C8.1601 41.9009 7.87694 41.3345 8.05159 40.8106C8.22624 40.2867 8.79256 40.0035 9.3165 40.1781C11.5961 40.938 13.5291 41.6093 15.2033 42.1906C17.4259 42.9625 19.1924 43.5759 20.708 44.0279C23.3254 44.8085 24.9981 45.0417 26.716 44.7646C28.4761 44.4807 30.3769 43.6488 33.431 42.067C34.3902 41.5701 35.4604 41.0011 36.6674 40.3592C38.9893 39.1245 41.8175 37.6206 45.3361 35.8439C44.9361 35.5341 44.4846 35.292 43.9992 35.1302C43.1252 34.8389 42.1832 34.8218 41.2995 35.0811L32.5154 37.9979C31.9913 38.1719 31.4253 37.8881 31.2512 37.364C31.0772 36.8398 31.361 36.2738 31.8851 36.0998L40.6851 33.1778L40.7155 33.1682Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M8 30.2109C8 29.6587 8.44772 29.2109 9 29.2109H15C15.0118 29.2109 15.0236 29.2111 15.0354 29.2116C18.5543 29.3363 21.8956 30.765 24.4143 33.2109H29.9199C30.3257 33.1515 30.7398 33.175 31.137 33.2804C31.5657 33.3942 31.9642 33.6006 32.3044 33.8852C32.6447 34.1698 32.9183 34.5255 33.1061 34.9274C33.2939 35.3292 33.3912 35.7674 33.3912 36.2109C33.3912 36.6545 33.2939 37.0926 33.1061 37.4945C32.9183 37.8963 32.6447 38.2521 32.3044 38.5367C31.9642 38.8212 31.5657 39.0277 31.137 39.1415C30.7398 39.2469 30.3257 39.2704 29.9199 39.2109H19C18.4477 39.2109 18 38.7632 18 38.2109C18 37.6587 18.4477 37.2109 19 37.2109H30C30.0593 37.2109 30.1184 37.2162 30.1768 37.2267C30.3254 37.2534 30.478 37.2471 30.6239 37.2084C30.7698 37.1697 30.9055 37.0994 31.0213 37.0025C31.1371 36.9057 31.2302 36.7846 31.2942 36.6478C31.3581 36.511 31.3912 36.3619 31.3912 36.2109C31.3912 36.06 31.3581 35.9108 31.2942 35.7741C31.2302 35.6373 31.1371 35.5162 31.0213 35.4193C30.9055 35.3225 30.7698 35.2522 30.6239 35.2135C30.478 35.1747 30.3254 35.1685 30.1768 35.1952C30.1184 35.2057 30.0593 35.2109 30 35.2109H24C23.7294 35.2109 23.4703 35.1012 23.2819 34.9069C21.0951 32.6507 18.1214 31.3267 14.9819 31.2109H9C8.44772 31.2109 8 30.7632 8 30.2109Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M35.0078 3.12695C32.2464 3.12695 30.0078 5.36553 30.0078 8.12695C30.0078 10.8884 32.2464 13.127 35.0078 13.127C37.7692 13.127 40.0078 10.8884 40.0078 8.12695C40.0078 5.36553 37.7692 3.12695 35.0078 3.12695ZM28.0078 8.12695C28.0078 4.26096 31.1418 1.12695 35.0078 1.12695C38.8738 1.12695 42.0078 4.26096 42.0078 8.12695C42.0078 11.9929 38.8738 15.127 35.0078 15.127C31.1418 15.127 28.0078 11.9929 28.0078 8.12695Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.0078 17.127C22.2464 17.127 20.0078 19.3655 20.0078 22.127C20.0078 24.8884 22.2464 27.127 25.0078 27.127C27.7692 27.127 30.0078 24.8884 30.0078 22.127C30.0078 19.3655 27.7692 17.127 25.0078 17.127ZM18.0078 22.127C18.0078 18.261 21.1418 15.127 25.0078 15.127C28.8738 15.127 32.0078 18.261 32.0078 22.127C32.0078 25.9929 28.8738 29.127 25.0078 29.127C21.1418 29.127 18.0078 25.9929 18.0078 22.127Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.0078 19.127C25.5601 19.127 26.0078 19.5747 26.0078 20.127V24.127C26.0078 24.6792 25.5601 25.127 25.0078 25.127C24.4555 25.127 24.0078 24.6792 24.0078 24.127V20.127C24.0078 19.5747 24.4555 19.127 25.0078 19.127Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M35.0078 5.12695C35.5601 5.12695 36.0078 5.57467 36.0078 6.12695V10.127C36.0078 10.6792 35.5601 11.127 35.0078 11.127C34.4555 11.127 34.0078 10.6792 34.0078 10.127V6.12695C34.0078 5.57467 34.4555 5.12695 35.0078 5.12695Z" fill="#0969A1"></path></g><defs><clipPath id="clip0"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>
                                                                </div>
                                                                <div className='flex-1 p-3 flex flex-col justify-between'>
                                                                        <p className='text-[color:var(--secondary-color)]'>Du lịch và kiếm tiền</p>
                                                                        <p className='text-[color:var(--primary-color)]'>Learn more</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                                                                <div className='bg-[#E6F2F8] w-28 h-28 md:h-full flex items-center justify-center'>
                                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 22.5C4.20435 22.5 3.44129 22.8161 2.87868 23.3787C2.31607 23.9413 2 24.7043 2 25.5C2 26.2956 2.31607 27.0587 2.87868 27.6213C3.44129 28.1839 4.20435 28.5 5 28.5C5.55228 28.5 6 28.9477 6 29.5C6 30.0523 5.55228 30.5 5 30.5C3.67392 30.5 2.40215 29.9732 1.46447 29.0355C0.526784 28.0978 0 26.8261 0 25.5C0 24.1739 0.526784 22.9021 1.46447 21.9645C2.40215 21.0268 3.67392 20.5 5 20.5C5.55228 20.5 6 20.9477 6 21.5C6 22.0523 5.55228 22.5 5 22.5Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M40 34.3701C40.5523 34.3701 41 34.8178 41 35.3701V37.5001C41 39.7329 40.0828 41.5215 38.5764 42.7305C37.094 43.9203 35.1069 44.5001 33 44.5001H29C28.4477 44.5001 28 44.0524 28 43.5001C28 42.9478 28.4477 42.5001 29 42.5001H33C34.7612 42.5001 36.274 42.0139 37.3246 41.1707C38.3512 40.3468 39 39.1353 39 37.5001V35.3701C39 34.8178 39.4477 34.3701 40 34.3701Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M26 41.5C24.8954 41.5 24 42.3954 24 43.5C24 44.6046 24.8954 45.5 26 45.5C27.1046 45.5 28 44.6046 28 43.5C28 42.3954 27.1046 41.5 26 41.5ZM22 43.5C22 41.2909 23.7909 39.5 26 39.5C28.2091 39.5 30 41.2909 30 43.5C30 45.7091 28.2091 47.5 26 47.5C23.7909 47.5 22 45.7091 22 43.5Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 16.5C8.20435 16.5 7.44129 16.8161 6.87868 17.3787C6.31607 17.9413 6 18.7044 6 19.5V31.5C6 32.2956 6.31607 33.0587 6.87868 33.6213C7.44129 34.1839 8.20435 34.5 9 34.5H12V16.5H9ZM5.46447 15.9645C6.40215 15.0268 7.67392 14.5 9 14.5H13C13.5523 14.5 14 14.9477 14 15.5V35.5C14 36.0523 13.5523 36.5 13 36.5H9C7.67392 36.5 6.40215 35.9732 5.46447 35.0355C4.52678 34.0979 4 32.8261 4 31.5V19.5C4 18.1739 4.52678 16.9021 5.46447 15.9645Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M42 21.5C42 20.9477 42.4477 20.5 43 20.5C44.3261 20.5 45.5979 21.0268 46.5355 21.9645C47.4732 22.9021 48 24.1739 48 25.5C48 26.8261 47.4732 28.0979 46.5355 29.0355C45.5979 29.9732 44.3261 30.5 43 30.5C42.4477 30.5 42 30.0523 42 29.5C42 28.9477 42.4477 28.5 43 28.5C43.7956 28.5 44.5587 28.1839 45.1213 27.6213C45.6839 27.0587 46 26.2956 46 25.5C46 24.7044 45.6839 23.9413 45.1213 23.3787C44.5587 22.8161 43.7956 22.5 43 22.5C42.4477 22.5 42 22.0523 42 21.5Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M34 15.5C34 14.9477 34.4477 14.5 35 14.5H39C40.3261 14.5 41.5979 15.0268 42.5355 15.9645C43.4732 16.9021 44 18.1739 44 19.5V31.5C44 32.8261 43.4732 34.0979 42.5355 35.0355C41.5979 35.9732 40.3261 36.5 39 36.5H35C34.4477 36.5 34 36.0523 34 35.5V15.5ZM36 16.5V34.5H39C39.7957 34.5 40.5587 34.1839 41.1213 33.6213C41.6839 33.0587 42 32.2956 42 31.5V19.5C42 18.7044 41.6839 17.9413 41.1213 17.3787C40.5587 16.8161 39.7957 16.5 39 16.5H36Z" fill="#0969A1"></path><path fillRule="evenodd" clipRule="evenodd" d="M24 2.5C20.5522 2.5 17.2456 3.86964 14.8076 6.30761C12.3696 8.74558 11 12.0522 11 15.5C11 16.0523 10.5523 16.5 10 16.5C9.44772 16.5 9 16.0523 9 15.5C9 11.5218 10.5804 7.70644 13.3934 4.8934C16.2064 2.08035 20.0218 0.5 24 0.5C27.9782 0.5 31.7936 2.08035 34.6066 4.8934C37.4196 7.70644 39 11.5218 39 15.5C39 16.0523 38.5523 16.5 38 16.5C37.4477 16.5 37 16.0523 37 15.5C37 12.0522 35.6304 8.74558 33.1924 6.30761C30.7544 3.86964 27.4478 2.5 24 2.5Z" fill="#0969A1"></path></svg>
                                                                </div>
                                                                <div className='flex-1 p-3 flex flex-col justify-between'>
                                                                        <p className='text-[color:var(--secondary-color)] capitalize'>Hỗ trợ khách hàng 24/7</p>
                                                                        <p className='text-[color:var(--primary-color)]'>Learn more</p>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className='container'>
                                        <h2 className='font-bold text-xl'>Điểm Đến Phổ Biến</h2>
                                        <div className='flex gap-[2%] md:max-h-[506px] overflow-hidden flex-col mt-6 justify-between flex-wrap'>
                                                <div className='w-full md:w-[48%] pb-5'>
                                                        <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[30%] md:pt-[15%] relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg")' }}>
                                                                <div className='absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.15)]'></div>
                                                                <div className='z-20 absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                                                                        <p className='text-white text-lg font-bold'>Europe</p>
                                                                        <div className='flex gap-3'>
                                                                                <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                                                                                <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <ul className='mt-2 flex-col gap-2 grid grid-cols-3'>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Amalfi Coast</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Austria</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Croatia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>England</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Finland</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Germany</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Iceland</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Ireland</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Italy</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Netherlands</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Norway</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Poland</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Portugal</Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className='w-full md:w-[48%] pb-5'>
                                                        <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[30%] md:pt-[15%] relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/africa-desktop.jpg")' }}>
                                                                <div className='absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.15)]'></div>
                                                                <div className='z-20 absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                                                                        <p className='text-white text-lg font-bold'>Africa</p>
                                                                        <div className='flex gap-3'>
                                                                                <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                                                                                <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <ul className='mt-2 flex-col gap-2 grid grid-cols-3'>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Egypt</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Kenya</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Morocco</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Namibia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>South Africa</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Tanzania</Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className='w-full md:w-[48%] pb-5'>
                                                        <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[30%] md:pt-[15%] relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/latin-america-desktop.jpg")' }}>
                                                                <div className='absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.15)]'></div>
                                                                <div className='z-20 absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                                                                        <p className='text-white text-lg font-bold'>Latin America</p>
                                                                        <div className='flex gap-3'>
                                                                                <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                                                                                <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <ul className='mt-2 flex-col gap-2 grid grid-cols-3'>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Argentina</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Brazil</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Chile</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Mexico</Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className='w-full md:w-[48%] pb-5'>
                                                        <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[30%] md:pt-[15%] relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/asia-desktop.jpg")' }}>
                                                                <div className='absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.15)]'></div>
                                                                <div className='z-20 absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                                                                        <p className='text-white text-lg font-bold'>Asia</p>
                                                                        <div className='flex gap-3'>
                                                                                <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                                                                                <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <ul className='mt-2 flex-col gap-2 grid grid-cols-3'>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Việt Nam</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Bali</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Bhutan</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Cambodia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>China</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Georgia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Holu Land</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>India</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Indonesia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Georgia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Japan</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Jordan</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Thailand</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Malaysia</Link>
                                                                </li>
                                                                <li>
                                                                        <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>Myanmar</Link>
                                                                </li>
                                                        </ul>
                                                </div>

                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className='container'>
                                        <h2 className='font-bold text-2xl'>Những điểm đến tốt nhất cho mỗi mùa</h2>
                                        <div className='mt-4'>
                                                <p className='mb-4 font-bold flex items-center gap-4'>
                                                        <BsFillSunFill color="red" size="32" />
                                                        Tour khởi hành vào mùa đông (Tháng 12, Tháng 1, Tháng 2)</p>
                                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Europe in December</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/RdCdKI.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Nile cruises in December</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/CkXcKF.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Vietnam in January</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/TAuWHN.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>New Zealand in January</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/7UhHa2.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Antarctica/South Pole in January</p>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>


                                        <div className='mt-4'>
                                                <p className='mb-4 font-bold flex items-center gap-4'>
                                                        <BsFillSunFill color="red" size="32" />
                                                        Tour khởi hành vào mùa xuân (Tháng 3, Tháng 4, Tháng 5)</p>
                                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/NUnnV3.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Iceland in March</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/TzJbhr.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Japan in April</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/QBYIAA.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Sicily in April</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/JyRid6.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Peru in May</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                                                                <div className='w-1/4 rounded-xl overflow-hidden'>
                                                                        <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/2wSkq8.jpg")' }}></div>
                                                                </div>
                                                                <div className='flex-1 flex items-center'>
                                                                        <p className='text-[15px]'>Greence in May</p>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className="my-8">
                                <div className="container">
                                        <h2 className='font-bold text-2xl'>Phiêu lưu dành cho mọi lứa tuổi</h2>
                                        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-6'>
                                                <Link href="" className='w-full'>
                                                        <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg")' }}></div>
                                                        <p className='mt-4 font-bold text-lg'>Các gia đình</p>
                                                </Link>
                                                <Link href="" className='w-full'>
                                                        <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/oBNTtw.jpg")' }}></div>
                                                        <p className='mt-4 font-bold text-lg'>Cặp đôi</p>
                                                </Link>
                                                <Link href="" className='w-full'>
                                                        <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/ZBGiRY.jpg")' }}></div>
                                                        <p className='mt-4 font-bold text-lg'>Người lớn tuổi</p>
                                                </Link>
                                                <Link href="" className='w-full'>
                                                        <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/Hnc8Zp.jpg")' }}></div>
                                                        <p className='mt-4 font-bold text-lg'>Thanh niên</p>
                                                </Link>
                                        </div>
                                </div>
                        </section>

                        {/* support */}
                        <section className="my-8">
                                <div className="container">
                                        <h2 className='font-bold text-2xl'>Chăm sóc khách hàng 24/7</h2>
                                        <div className="mt-6 flex flex-col md:flex-row gap-12">
                                                <div className="w-full md:w-2/3">
                                                        <p className="text-sm">Đội ngũ chuyên gia phiêu lưu giàu kinh nghiệm của chúng tôi đã đi đến hàng trăm quốc gia trên toàn cầu và có hàng chục năm kinh nghiệm du lịch trực tiếp để chia sẻ. Hãy liên hệ ngay với chúng tôi để được giải đáp mọi thắc mắc liên quan đến quảng cáo của bạn!</p>
                                                        <button className='mt-4 py-3 px-20 rounded bg-[color:var(--primary-color)] font-medium text-white'>Liên hệ chúng tôi</button>
                                                </div>
                                                <div className="flex-1 flex justify-center md:justify-end">
                                                        <div className='mr-[-4%] z-30'>
                                                                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
                                                        </div>
                                                        <div className='mr-[-4%] z-20'>
                                                                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
                                                        </div>
                                                        <div className=''>
                                                                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className="my-8 bg-[#2C3E50] py-8">
                                <div className="container">
                                        <div className="uppercase text-white text-center">
                                                <h2 className="text-lg">Những ngày tiếp theo</h2>
                                                <p className="text-sm">Tạp chí du lịch itourgo</p>
                                        </div>
                                        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                                                <Link href="" className="w-full">
                                                        <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2017/09/HEROunknown-location-shutterstock_2124196307-2048x1259.jpg")' }}>
                                                                <div className='absolute bottom-[0%] text-white p-4'>
                                                                        <h6 className='text-lg font-medium'>Điểm đến tốt nhất cho du khách khuyết tật</h6>
                                                                        <p className='text-sm'>Randi Gollin</p>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full">
                                                        <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2018/07/RS11371_shutterstock_Switzerland_Zermatt_704449474-1-2048x1365.jpg")' }}>
                                                                <div className='absolute bottom-[0%] text-white p-4'>
                                                                        <h6 className='text-lg font-medium'>Bảy chuyến tàu ngắm cảnh đẹp nhất ở châu Âu</h6>
                                                                        <p className='text-sm'>Shandana A. Durrani</p>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full">
                                                        <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/12/HEROAlaskaUSA.NanditaDamaraju_Unsplash-2048x1367.jpg")' }}>
                                                                <div className='absolute bottom-[0%] text-white p-4'>
                                                                        <h6 className='text-lg font-medium'>Nơi để xem cực quang vào tháng 2</h6>
                                                                        <p className='text-sm'>Anna Hann</p>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full">
                                                        <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/12/HEROTanzania.Delbars_Shutterstock-2048x1365.jpg")' }}>
                                                                <div className='absolute bottom-[0%] text-white p-4'>
                                                                        <h6 className='text-lg font-medium'>Điểm đến Safari tốt nhất ở Châu Phi</h6>
                                                                        <p className='text-sm'>Shandana A. Durrani</p>
                                                                </div>
                                                        </div>
                                                </Link>
                                        </div>
                                </div>
                        </section>

                        {/* Top Operators */}
                        <section className="my-8">
                                <div className="container">
                                        <h2 className="font-bold text-2xl">
                                                Đối tác hàng đầu
                                        </h2>
                                        <div className="mt-6 grid gird-cols-1 md:grid-cols-3 gap-6">
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Contiki</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/G_Adventures-bde9.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>G Adventures</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/trafalgar-64e8.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Trafalgar</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Globus-2607.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Globus</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Topdeck-81a1.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Topdeck</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/collette-vacations-4e29.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Collectte</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
                                                        <div>
                                                                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Cosmos-0f3d.png" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-between">
                                                                <h5>Cosmos</h5>
                                                                <div className="flex gap-3 items-center text-sm">
                                                                        <span className="text-orange-500">4.7</span>
                                                                        <i className='flex text-orange-500'>
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                                <FaStar />
                                                                        </i>
                                                                        <span className='text-[#777777'>5,200 reviews</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                        </div>
                                        <div className='w-full flex justify-center mt-4'>
                                                <button className='px-20 py-3 bg-[color:var(--primary-color)] rounded-lg font-medium text-white'>All operator</button>
                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className="container">
                                        <h2 className='font-bold text-2xl'>Recommended Destinations</h2>
                                        <div className='mt-6 grid grid-cols-2 md:grid-cols-6 gap-5'>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/2583_bijswBKK.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Italy</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/230_8iHJe7dn.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Europe </h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/75_RCUhrKb3.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Asia</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/2358_dP5Y2seR.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Iceland</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/2398_BKrVtAjW.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">India</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/209328_QgZR4Ev9.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Amalfi Coast</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                                <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/162_s4fB4Hnm.jpg")' }}>
                                                        <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                                                                <div className="text-white flex flex-col gap-2 text-center">
                                                                        <h5 className="text-xl font-bold">Australia</h5>
                                                                        <p className="text-sm">600 tour</p>
                                                                </div>
                                                        </div>
                                                        <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
                                                </Link>
                                        </div>
                                </div>
                        </section>

                        <section className='my-8'>
                                <div className="container">
                                        <h2 className="font-bold text-2xl">Featured Adventures</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-8">
                                                <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
                                                        <p className='line-clamp-1 font-medium mb-2'>Oktoberfest Munich (3-Star Hotel S)</p>
                                                        <p className='line-clamp-1 text-sm'>8 days from $648</p>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
                                                        <p className='line-clamp-1 font-medium mb-2'>Peru Tailored (Nazca Lines, Inca Trai)</p>
                                                        <p className='line-clamp-1 text-sm'>8 days from $648</p>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
                                                        <p className='line-clamp-1 font-medium mb-2'>Christian Israel & Petra, 9 Days</p>
                                                        <p className='line-clamp-1 text-sm'>8 days from $648</p>
                                                </Link>
                                                <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
                                                        <p className='line-clamp-1 font-medium mb-2'>Best of Bulgaria Roundtrip</p>
                                                        <p className='line-clamp-1 text-sm'>8 days from $648</p>
                                                </Link>
                                        </div>
                                </div>
                        </section>

                        <section className="my-8 bg-[#2C3E50] py-12">
                                <div className="container flex flex-col md:flex-row justify-between gap-4">
                                        <div className="w-full md:w-2/5 flex flex-col justify-between text-white">
                                                <h2 className="text-2xl">Đăng ký nhận thông báo của chúng tôi</h2>
                                                <p className="text-sm">Tiết kiệm tới 50% cho các chuyến tham quan! Nhận quyền truy cập độc quyền vào các giao dịch chỉ dành cho thành viên qua email.</p>
                                        </div>
                                        <div className="">
                                                <div className="w-full flex rounded h-12 overflow-hidden">
                                                        <input placeholder="ex: example@gmail.com" className='flex-1 h-full border-none  border-l border-r focus-input-none' type="text" />
                                                        <button className='h-full px-3 md:px-12 bg-[color:var(--primary-color)] text-white font-medium'>Đăng ký</button>
                                                </div>
                                                <p className='text-sm text-white mt-6'>Bằng cách gửi biểu mẫu này, tôi đồng ý với Chính sách quyền riêng tư và Điều khoản của ItourGo</p>
                                        </div>
                                </div>
                        </section>
                </div >
        );
}
export default Hotel;
