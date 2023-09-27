import Button from "@/components/button";

export default function Header() {
    return (
        <div className='bg-white shadow-lg'>
        <div className='container flex justify-between py-2'>
          <div>
            <h3 className='text-sm'>Orders {'>'} <span className='underline'>Order 32752AB</span></h3>
            <h2 className='text-xl mt-10 font-bold'>Order 32752AB</h2>
          </div>
          <div className='flex flex-row items-end gap-10'>
            <Button>Back</Button>
            <Button variant="primary">Approve Order</Button>
          </div>
        </div>
        </div>
    )
}