'use client'
import { useEffect, useState } from 'react'
import Link from "next/link"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { useSearchParams } from 'next/navigation'


import { Accordion } from 'flowbite-react';
const About = () => {
        const searchParams = useSearchParams()
        const [tab, setTab] = useState(searchParams.get('tab') || "1")
        useEffect(() => {
                setTab(searchParams.get('tab') || tab)
        }, [searchParams])
        const handleChangeTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="mt-8">
                        {/* Tab */}
                        <div className="mt-8 border-b w-full">
                                <div className="container">
                                        <div className="grid grid-flow-col justify-stretch uppercase">
                                                <Link href="/about?tab=1" id="1" onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == "1" ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Giới thiệu
                                                </Link>
                                                <Link href="/about?tab=2" id="2" onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == "2" ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Câu hỏi thường gặp
                                                </Link>
                                                <Link href="/about?tab=3" id="3" onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == "3" ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Điều khoản sử dụng
                                                </Link>
                                                <Link href="/about?tab=4" id="4" onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == "4" ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Chính sách bảo mật
                                                </Link>

                                        </div>
                                </div>

                        </div>

                        <div className="">
                                <div className={`${tab == "1" ? "block" : "hidden"} py-12`}>
                                        <div className="container">
                                                <div className='text-center px-0 md:px-40'>
                                                        <h3 className="text-2xl font-bold">PNG SOFT</h3>
                                                        <p className="mt-8">Website Planet là trung tâm hàng đầu của thế giới web dành cho các cá nhân và doanh nghiệp đang tìm cách tạo dựng, quảng bá hoặc mở rộng sự hiện diện trực tuyến của họ. Chúng tôi cung cấp các đánh giá có căn cứ, các so sánh chuyên sâu, các hướng dẫn dễ hiểu và các công cụ mạnh mẽ để giúp bạn đạt được tham vọng kỹ thuật số của mình.</p>
                                                        <img className="w-1/2 mx-auto mt-12" src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/AboutUsMainGlobe.png" alt="" />
                                                </div>
                                                <div className='flex flex-col md:flex-row my-12 gap-8'>
                                                        <div className='w-full md:w-1/5'>
                                                                <h6 className='text-3xl font-medium border-b-4 border-b-red-500 pb-4'>Câu chuyện của chúng tôi</h6>

                                                        </div>
                                                        <div className='flex-1 flex flex-col gap-4'>
                                                                <p>Website Planet được trình làng vào năm 2013 bởi hai nhà phát triển web nhiệt huyết. Những nhà tiên phong ban đầu này bị thất vọng bởi sự thiếu thốn các thông tin trực tuyến dựa trên nghiên cứu, dễ tiếp cận về những sản phẩm và dịch vụ kỹ thuật số có thể thực sự giúp cho các cá nhân và doanh nghiệp tạo dựng một website chuyên nghiệp.</p>
                                                                <p>Kể từ đó, rất nhiều thứ đã thay đổi trên thế giới web và rất nhiều thứ đã thay đổi tại Website Planet. Do nhu cầu của độc giả ngày càng phát triển, nên đội ngũ của chúng tôi cũng vậy. Chúng tôi hiện có các chuyên gia về lĩnh vực lưu trữ web, thiết kế web, tiếp thị kỹ thuật số, SEO, xử lý thanh toán, chiến lược kinh doanh, v.v.</p>
                                                                <p>Trang web khởi đầu như một dự án phụ nhằm khám phá các công cụ phát triển web tốt nhất (và tệ nhất) nay đã trở thành điểm đến cuối cùng cho các doanh nghiệp thuộc mọi quy mô và ngành nghề để tìm thấy những gì họ cần cho việc xây dựng, tiếp thị và duy trì sự hiện diện trực tuyến có khả năng sinh lợi.</p>
                                                        </div>
                                                </div>

                                                <div className='bg-[#F7F8FC] pb-12'>
                                                        <div className='mx-0 md:mx-60 text-center flex flex-col items-center gap-6'>
                                                                <div className='w-3 h-12 bg-orange-400'></div>
                                                                <h6 className='text-3xl font-medium'>Chúng tôi ở đâu</h6>
                                                                <p>Với thiên tư về lĩnh vực kỹ thuật số, chúng tôi thấy không có lý do gì để giới hạn bản thân trong việc tuyển dụng nhân tài chỉ từ một nơi trên thế giới. </p>
                                                                <p>Đó là lý do tại sao chúng tôi tự hào nói rằng Website Planet được vận hành bởi nhiều chuyên gia tận tụy đang sinh sống và làm việc trên khắp 6 châu lục. Điều này không chỉ thúc đẩy việc học hỏi liên tục trong đội ngũ mà còn cho phép chúng tôi cung cấp một góc nhìn toàn diện, mang tính toàn cầu hơn cho các độc giả đa dạng của chúng tôi trên khắp thế giới.</p>
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/location-image-1-850x334.png" alt="" />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-full border-y-4 border-y-orange-500 grid grid-cols-1 md:grid-cols-2">
                                                <div className="bg-white">
                                                        <div className="py-8 text-center md:text-start md:w-2/3 md:mr-8 ml-auto">
                                                                <h6 className="text-2xl font-bold">Sứ mệnh của chúng tôi</h6>
                                                                <div className='mt-10'>
                                                                        <p className='mb-6'>Chúng tôi thường xuyên đánh giá lại tất cả các sản phẩm mình đã đánh giá để đảm bảo bạn luôn nhận được thông tin cập nhật nhất. Điều này có nghĩa là chúng tôi luôn cập nhật những diễn biến mới nhất về giá cả, tính năng và dịch vụ khách hàng, để bạn biết chính xác nên mong đợi điều gì với số tiền bỏ ra.</p>
                                                                        <p className='mb-6'>Chúng tôi cũng tận tâm như vậy trong việc luôn cập nhật các xu hướng sản phẩm mới nhất. Nếu có một loại công cụ hoặc dịch vụ kỹ thuật số mới nào có thể giúp mang lại cho doanh nghiệp một lợi thế cạnh tranh trực tuyến, thì chúng tôi muốn tìm hiểu về nó. Tầm nhìn của chúng tôi về Website Planet là nó sẽ đóng vai trò như một trung tâm tài nguyên toàn diện, đó là lý do tại sao chúng tôi tìm kiếm và đánh giá tất cả các sản phẩm dịch vụ mới nhất khi chúng tham gia vào thị trường kỹ thuật số.</p>
                                                                        <p className='mb-6'>Ngoài những thông tin chuyên sâu chúng tôi còn cung cấp một bộ công cụ phát triển web miễn phí trực tiếp ngay trên website của mình. Từ trình tạo tên miền, trình biểu tượng website đến trình kiểm tra SSL, trình kiểm tra tính đáp ứng của website, Website Planet cung cấp phong phú các công cụ bạn cần để thiết lập và cải thiện sự hiện diện trực tuyến của mình.</p>
                                                                        <p className='mb-6'>Nếu Website Planet trang bị cho bạn tất cả các tài nguyên bạn cần để thành công trực tuyến, thì sứ mệnh của chúng tôi hoàn thành!</p>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className="bg-orange-500">
                                                        <div className="py-8 w-2/3 ml-8 mr-auto  text-white">
                                                                <h6 className="text-2xl font-bold">Sứ mệnh của chúng tôi</h6>
                                                                <div className='mt-10'>
                                                                        <p className='mb-6'>Trên hết thảy, chúng tôi tin rằng tất cả mọi người đều có thể đạt được sự hiện diện trực tuyến chuyên nghiệp – chứ không chỉ những người am hiểu công nghệ nhất và những người có hầu bao rủng rỉnh. Chúng tôi hiểu rằng điều này chỉ có thể đạt được thông qua khả năng tiếp cận miễn phí các bài đánh giá và so sánh trung thực, lấy người dùng làm trung tâm về vô số dịch vụ đang tranh nhau thu hút sự chú ý (cũng như thông tin thẻ tín dụng) của bạn.</p>
                                                                        <p className='mb-6'>Đó là lý do tại sao chúng tôi luôn cố gắng làm cho bài viết của mình trở nên hữu ích và dễ hiểu nhất có thể, dịch nó sang tận 29 ngôn ngữ. Đó cũng là lý do tại sao chúng tôi hoàn toàn minh bạch về quy trình đánh giá đằng sau mỗi bài đánh giá mà chúng tôi đăng tải.</p>
                                                                        <p className='mb-6'>Tài sản quý giá nhất của chúng tôi là danh tiếng như một nguồn thông tin đáng tin cậy, nhắc nhở chúng tôi đặt tính chính trực làm cốt lõi trong mọi việc mình làm. Chúng tôi không bao giờ đồng ý nhận tiền để đánh giá một sản phẩm hoặc dịch vụ, chúng tôi cũng không giới thiệu bất kỳ dịch vụ nào mà đích thân chúng tôi chưa từng sử dụng.</p>
                                                                        <p className='mb-6'>Để duy trì nội dung miễn phí cho độc giả, chúng tôi trang trải chi phí thông qua hoa hồng tiếp thị liên kết. Nếu bạn mua hàng sau khi nhấp vào liên kết trên trang web của chúng tôi, chúng tôi có thể nhận được hoa hồng cho giao dịch mua đó. Thỏa thuận này cho phép chúng tôi duy trì tính độc lập của mình, mặc dù thứ hạng chúng tôi đưa ra trên các trang danh sách có thể tính đến phản hồi của độc giả và thỏa thuận thương mại của chúng tôi với các nhà cung cấp.</p>
                                                                        <p className='mb-6'>Cuối cùng, ưu tiên số một của chúng tôi là giúp bạn tìm thấy chính xác những gì bạn cần để thành công trực tuyến. Bất kể bạn sắp bắt đầu một doanh nghiệp mới, ra mắt trang web đầu tiên của mình, xây dựng thương hiệu và tiếp thị một trang web hiện có hay thiết lập quy trình xử lý thanh toán của bạn, Website Planet luôn sẵn sàng trợ giúp.</p>
                                                                </div>
                                                        </div>

                                                </div>
                                        </div>

                                        <div className="container py-8">
                                                <h6 className='text-2xl font-bold text-center'>Đội Ngũ</h6>
                                                <div className="gap-6 grid grid-cols-2 md:grid-cols-5 mt-12">
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                        <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                <p className='text-xs'>Developer</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="bg-[#F7F8FC]">
                                                <div className="container flex flex-col md:flex-col gap-8 py-12">
                                                        <div className="w-full md:w-3/5">
                                                                <h6 className='text-2xl font-bold pb-4 mb-8 border-b-4 border-b-orange-500'>Phòng nghiên cứu</h6>
                                                                <p>Website Planet làm việc với các cơ quan chuyên về quyền riêng tư dữ liệu và các đội ứng phó khẩn cấp máy tính (CERT) để xác định các mối đe dọa mạng và giúp bảo vệ dữ liệu người dùng của các doanh nghiệp và tổ chức. Chúng tôi đã thành lập đội phân tích an ninh mạng vì lợi ích cộng đồng vào năm 2019 dưới sự lãnh đạo của hai nhà phân tích nổi tiếng thế giới Noah Rotem và Ran Locar. Kể từ đó, chúng tôi đã phát hiện và báo cáo về các mối đe dọa an ninh nghiêm trọng trên khắp thế giới. Với công việc này, chúng tôi đã bảo mật dữ liệu của hơn 100 triệu người.</p>
                                                        </div>
                                                        <div className="flex-1 flex flex-col justify-center gap-10">
                                                                <div className='flex gap-4 p-4 bg-white'>
                                                                        <div className='h-20 w-20 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/countries_involved-2.png")' }}></div>
                                                                        <div className='flex-1 flex flex-col items-center'>
                                                                                <p className='text-4xl font-medium'>15+</p>
                                                                                <p className='text-sm'>Quốc gia liên quan</p>
                                                                        </div>
                                                                </div>
                                                                <div className='flex gap-4 p-4 bg-white'>
                                                                        <div className='h-20 w-20 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/countries_involved-2.png")' }}></div>
                                                                        <div className='flex-1 flex flex-col items-center'>
                                                                                <p className='text-4xl font-medium'>15+</p>
                                                                                <p className='text-sm'>Quốc gia liên quan</p>
                                                                        </div>
                                                                </div>
                                                                <div className='flex gap-4 p-4 bg-white'>
                                                                        <div className='h-20 w-20 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/countries_involved-2.png")' }}></div>
                                                                        <div className='flex-1 flex flex-col items-center'>
                                                                                <p className='text-4xl font-medium'>15+</p>
                                                                                <p className='text-sm'>Quốc gia liên quan</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className='border-y-2 py-12'>
                                                        <div className='container grid-cols-2 grid md:grid-cols-6'>
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                                <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/Insider-Logo-1.png" alt="" />
                                                        </div>
                                                </div>


                                                <div className="container py-12">
                                                        <div className='text-center'>
                                                                <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Báo cáo mới nhất</h1>
                                                        </div>
                                                        <div className="grid-cols-1 grid md:grid-cols-3 gap-8 mt-12">
                                                                <div className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                        <div className="relative">
                                                                                <img className="w-full" src="https://i1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw" alt="" />
                                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                                </div>
                                                                        </div>
                                                                        <div className="flex flex-col justify-between">
                                                                                <div className="p-4">
                                                                                        <div className="flex flex-col gap-4 pb-4">
                                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold line-clamp-2'>Trải nghiệm du lịch Nha Trang</h3>
                                                                                                <h4 className='text-3xl font-semibold line-clamp-1'>Nha Trang</h4>
                                                                                                <p className="line-clamp-3">Nha Trang, thành phố biển nằm tại vị trí trung tâm tỉnh Khánh Hòa, từ lâu đã là một trong những điểm du lịch hút khách nhất Việt Nam. Được thiên nhiên ban tặng những bãi biển, vùng vịnh đẹp cùng nhiều đảo lớn nhỏ, thành phố còn sở hữu nhiều danh lam thắng cảnh, điểm tham quan, vui chơi và cơ sở nghỉ dưỡng.</p>
                                                                                        </div>

                                                                                </div>
                                                                                <div className="flex justify-between p-4">
                                                                                        <div className="p-4 flex gap-2 items-center">
                                                                                                <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}></div>
                                                                                                <p>Quang Linh</p>
                                                                                        </div>
                                                                                        <div className='flex items-center'>
                                                                                                <button className=' bg-[color:var(--primary-color)] px-6 py-2 rounded-full text-white'>Đọc thêm</button>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                                <div className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                        <div className="relative">
                                                                                <img className="w-full" src="https://i1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw" alt="" />
                                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                                </div>
                                                                        </div>
                                                                        <div className="flex flex-col justify-between">
                                                                                <div className="p-4">
                                                                                        <div className="flex flex-col gap-4 pb-4">
                                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold line-clamp-2'>Trải nghiệm du lịch Nha Trang</h3>
                                                                                                <h4 className='text-3xl font-semibold line-clamp-1'>Nha Trang</h4>
                                                                                                <p className="line-clamp-3">Nha Trang, thành phố biển nằm tại vị trí trung tâm tỉnh Khánh Hòa, từ lâu đã là một trong những điểm du lịch hút khách nhất Việt Nam. Được thiên nhiên ban tặng những bãi biển, vùng vịnh đẹp cùng nhiều đảo lớn nhỏ, thành phố còn sở hữu nhiều danh lam thắng cảnh, điểm tham quan, vui chơi và cơ sở nghỉ dưỡng.</p>
                                                                                        </div>

                                                                                </div>
                                                                                <div className="flex justify-between p-4">
                                                                                        <div className="p-4 flex gap-2 items-center">
                                                                                                <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}></div>
                                                                                                <p>Quang Linh</p>
                                                                                        </div>
                                                                                        <div className='flex items-center'>
                                                                                                <button className=' bg-[color:var(--primary-color)] px-6 py-2 rounded-full text-white'>Đọc thêm</button>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className={`${tab == "2" ? "flex" : "hidden"} py-12`}>
                                        <div className="container">
                                                <div className="flex flex-col md:flex-row gap-12">
                                                        <div className="w-full md:w-3/5">
                                                                <h2 className="text-3xl font-bold">Các câu hỏi thường gặp</h2>
                                                                <h3 className='text-2xl mt-3'>Các thắc mắc của bạn có thể được giải quyết ở đây</h3>
                                                                <p className='text-sm mt-2'>Website Planet là một cổng thông tin nội dung và trung tâm đánh giá dành cho bất kỳ ai đang muốn xây dựng một website mới hoặc cải thiện website sẵn có. Chúng tôi đang tìm cách đơn giản hóa và giảm giá thành xuống trong thế giới dịch vụ website vì lợi ích của cộng đồng chúng ta.</p>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Tổng quan</h4>
                                                                        <div className='flex flex-col gap-3'>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Đánh giá</h4>
                                                                        <div className='flex flex-col gap-3'>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                                <div className="flex flex-col gap-2">
                                                                                        <p className="font-medium">Tôi có thể tìm thấy các bạn ở nơi nào khác trên Web? Facebook, Twitter?</p>
                                                                                        <p className='text-sm'>Bạn có thể tìm thấy các tin tức và cập nhật mới nhất của chúng tôi trên Facebook và trên Twitter.</p>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className='flex-1'>
                                                                <div className='w-4/5 border mx-auto rounded p-2'>
                                                                        <h6 className='p-4 border-b-2 text-2xl'>Theo dõi chúng tôi</h6>
                                                                        <div className='p-4'>
                                                                                <div className='flex gap-5 text-2xl mb-4'>
                                                                                        <Link href=""><BsFacebook /></Link>
                                                                                        <Link href=""><BsTwitter /></Link>
                                                                                </div>
                                                                                <p className='text-xs'>Chúng tôi sẽ luôn cập nhật các kênh mạng xã hội của mình … hãy theo dõi để xem các tin tức mới nhất!</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>


                                <div className={`${tab == "3" ? "flex" : "hidden"} py-12`}>
                                        <div className="container">
                                                <div className="flex flex-col md:flex-row gap-12">
                                                        <div className="w-full md:w-3/5">
                                                                <h2 className="text-3xl font-bold">Điều khoản sử dụng</h2>
                                                                <h3 className='text-2xl mt-3'>Websiteplanet.com Terms of Use</h3>
                                                                <p className='text-sm mt-2'>The terms of use below constitute a legal Agreement between you (Herein referred to as “The Customer”) and Websiteplanet.com. (Herein referred to as “The Company”), legal owner of the domain name and web site Websiteplanet (Herein referred to as “The Website”), each referred to herein as a “Party” and collectively as the “Parties”. Your agreement to be bound by these terms is acknowledged by your use of the Company Services which includes, but is not limited to visiting the website, using its internal and external links for search of information, contacting Company representatives, Support Services and/or any software made available to you by Company.</p>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>1. Information.</h4>
                                                                        <p>Any information posted in relation with any Company services or products is only informational and does not govern the relationship between The Company and its customer in connection to any Company products or services. These relationships are governed by the specific this Terms of Use Agreement and the Privacy Agreement.</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>2. Use.</h4>
                                                                        <p>The website visitor can use the information posted at The Company website for informational purpose only. You cannot use the information of the website in any other way without a prior written consent from The Company.</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>3. Availability.</h4>
                                                                        <p>The Customer acknowledges that the Internet is neither owned nor controlled by any organization, company, legal or physical entity. Therefore, The Company cannot guarantee that any user will be able to access The Website or any of The Company’s servers or services at any given time. The Company represents that it shall make every good faith effort to ensure that its Website and all of its Servers or Services are available as widely as possible and with as little service interruption as possible.</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>4. Third Party Websites.</h4>
                                                                        <p>The Company has no liability or responsibility for the accuracy or suitability of content on a third party website that can be reached by using The Company website. Your use of any content from a third party website, including but not limited to, information, downloadable files, etc. is at your own risk.</p>

                                                                </div>
                                                        </div>
                                                        <div className='flex-1'>
                                                                <div className='w-4/5 border mx-auto rounded p-2'>
                                                                        <h6 className='p-4 border-b-2 text-2xl'>Theo dõi chúng tôi</h6>
                                                                        <div className='p-4'>
                                                                                <div className='flex gap-5 text-2xl mb-4'>
                                                                                        <Link href=""><BsFacebook /></Link>
                                                                                        <Link href=""><BsTwitter /></Link>
                                                                                </div>
                                                                                <p className='text-xs'>Chúng tôi sẽ luôn cập nhật các kênh mạng xã hội của mình … hãy theo dõi để xem các tin tức mới nhất!</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>


                                <div className={`${tab == "4" ? "flex" : "hidden"} py-12`}>
                                        <div className="container">
                                                <div className="flex flex-col md:flex-row gap-12">
                                                        <div className="w-full md:w-3/5">
                                                                <h2 className="text-3xl font-bold">Privacy Policy</h2>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Websiteplanet.com Privacy Policy</h4>
                                                                        <p>Please read the following to learn more about our privacy policy, the types of personal information we gather and the steps we take to safeguard it when you use the Web sites, applications and services provided by us (the “Services”).This site is provided by websiteplanet.com. and its affiliates (“Websiteplanet,” “we” or “us”). This policy covers how we treat personal information that we collect and use on or through the Services and other related websites where this policy is posted on the footer of the Web page.You agree that this Privacy Policy is part of our Terms of Use, which you can review at https://www.websiteplanet.com/terms-of-use/. By accessing or using the Services, you agree to be bound by all of our terms and conditions.</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Information Collection and Use</h4>
                                                                        <p>When you use the Services, you provide information to us. Websiteplanet collects two types of information: (1) information that you provide to us that lets us know who you are (“Personally Identifiable Information”) and (2) information that does not by itself identify a specific individual (“Non-personally Identifiable Information”).</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Personally Identifiable Information</h4>
                                                                        <p>You can browse the Services’ Websites without telling Websiteplanet who you are or revealing any personal information about yourself. However, when you transact with us or register to open an account with Websiteplanet, we ask for information about yourself, such as your name, email address, and zip code, which we collect and use as disclosed in this Privacy Policy. Once you submit information about yourself to us, you are not anonymous to us. We may also collect additional information about you when you engage in certain activities on the Services, such as: (a) when you sign up for special offers; (b) when you visit the Services’ Web pages or the pages of certain Websiteplanet partners ; (c) when you interact with offers and advertisements; (d) when you log into the Services with your account; (e) when you complete a survey; (f) when you post content or provide us with feedback; or (g) when you enter promotions or sweepstakes. Websiteplanet might also receive information about you from other sources and add it to your account information. Providing information is purely optional on your part; however, not all features and services (such as, responding to your inquiries) would be available to you if you elect not to provide information. If you choose to provide us with personal information, you consent to the transfer and storage of that information by us.</p>

                                                                </div>
                                                                <div className='mt-5'>
                                                                        <h4 className='mb-4 text-xl font-medium text-red-500'>Non-Personally Identifiable Information</h4>
                                                                        <p>We automatically receive and collect Non-personally Identifiable Information on our server logs from your browser, including your IP address, the Uniform Resource Locator (“URL”) that you just came from, which URL you next go to, browser type, browser language, date and time of your query, Websiteplanet cookie information, and the pages you request. This information is complied and analyzed on both a personal and an aggregated basis. We may use third-party analytics services to collect, monitor and analyze the information collected as described above.</p>

                                                                </div>
                                                        </div>
                                                        <div className='flex-1'>
                                                                <div className='w-4/5 border mx-auto rounded p-2'>
                                                                        <h6 className='p-4 border-b-2 text-2xl'>Theo dõi chúng tôi</h6>
                                                                        <div className='p-4'>
                                                                                <div className='flex gap-5 text-2xl mb-4'>
                                                                                        <Link href=""><BsFacebook /></Link>
                                                                                        <Link href=""><BsTwitter /></Link>
                                                                                </div>
                                                                                <p className='text-xs'>Chúng tôi sẽ luôn cập nhật các kênh mạng xã hội của mình … hãy theo dõi để xem các tin tức mới nhất!</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}
export default About