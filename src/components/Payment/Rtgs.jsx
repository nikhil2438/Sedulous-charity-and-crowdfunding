const RTGSBankDetails = () => {
    return (
      <div className="flex flex-wrap justify-center gap-8 w-full px-4">
        {/* HDFC Card */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full border border-orange-200">
          <p><span className="font-bold text-orange-600">Bank Name :</span> HDFC Bank</p>
          <p><span className="font-bold text-orange-600">A/C Name :</span> Maa Siddheshwari Charitable Trust</p>
          <p><span className="font-bold text-orange-600">A/C Type :</span> Current</p>
          <p><span className="font-bold text-orange-600">A/C Number :</span> 99990025032023</p>
          <p><span className="font-bold text-orange-600">IFSC Code :</span> HDFC0000708</p>
        </div>
  
        {/* SBI Card */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full border border-orange-200">
          <p><span className="font-bold text-orange-600">Bank Name :</span> State Bank of India</p>
          <p><span className="font-bold text-orange-600">A/C Name :</span> Maa Siddheshwari Charitable Trust</p>
          <p><span className="font-bold text-orange-600">A/C Type :</span> Current</p>
          <p><span className="font-bold text-orange-600">A/C Number :</span> 42387382145</p>
          <p><span className="font-bold text-orange-600">IFSC Code :</span> SBIN0016089</p>
        </div>
      </div>
    );
  };
  
  export default RTGSBankDetails;
  