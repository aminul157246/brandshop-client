import {ImPriceTag} from 'react-icons/im'
import {BsPercent} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
import {TfiMoney} from 'react-icons/tfi'

const LoanCalculator = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-12'>
            <h2 className='text-4xl font-bold text-center pt-12'>Loan Calculator</h2>
            <p className='text-gray-600 text-center'>Use our loan calculator to calculate payments over the life of your loan. Enter your br information to see how much your monthly payments could be. <br /> You can adjust length of loan, down payment and interest rate to see how those changes raise or lower your payments.</p>

            <div className='flex justify-center gap-6'>
                <div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    <span><ImPriceTag className='text-red-500'></ImPriceTag></span>
    <input type="text"  className="input input-bordered" />
  </label>
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Interest Rate</span>
  </label>
  <label className="input-group">
    <span><BsPercent className='text-red-500'></BsPercent></span>
    <input type="text" placeholder='5' className="input input-bordered" />
  </label>
</div>
                </div>
                <div>
                <div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Period(month) </span>
  </label>
  <label className="input-group">
    <span><BiTime className='text-red-500'></BiTime></span>
    <input type="text"  className="input input-bordered" />
  </label>
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Down Payment</span>
  </label>
  <label className="input-group">
    <span><TfiMoney className='text-red-500'></TfiMoney></span>
    <input type="text"  className="input input-bordered" />
  </label>
</div>
                </div>
                </div>
            </div>

            <div className='grid grid-cols-3 border rounded-lg py-6 border-red-500'>
                <div className='border-r-[3px]'>
                    <h4 className='text-center font-bold'>Monthly Payment</h4>
                    <p className='text-red-600 text-center'>_</p>
                </div>
                <div className='border-r-[3px]'>
                    <h4 className='text-center font-bold '>Total Interest</h4>
                    <p className='text-red-600 text-center'>_</p>
                </div>
                <div>
                    <h4 className='text-center font-bold'>Total Payments</h4>
                    <p className='text-red-600 text-center'>_</p>
                </div>
            </div>
            <p className='text-center text-gray-600 pb-12'>Title and other fees and incentives are not included in this calculation, which is an estimate only. Monthly payment estimates <br /> are for informational purpose and do not represent a financing offer from the seller of this vehicle. Other taxes may apply.</p>
        </div>
    );
};

export default LoanCalculator;