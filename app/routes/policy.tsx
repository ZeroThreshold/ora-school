import InfoLayout from "~/components/layouts/info";

const imageStr = "/images/assets/banner2.jpg";

export default function Policy() {
  return (
    <InfoLayout imageStr={imageStr} title="Policy">
      <div className="bg-whtie dark:bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Shipping & Return Policy</h1>
          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Policy</h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Processing Time: Orders are processed and shipped within 1-2
                business days. You will receive tracking information via your
                registered email once your order is on its way.
              </li>
              <li>
                Public Holidays: Orders placed on public holidays will be
                processed on the next business day.
              </li>
              <li>
                Delivery Time: For metro areas, delivery is estimated at 5-7
                business days. Please note that local restrictions may
                occasionally cause delays.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Eligibility: Returns are only accepted for products with a
                verified manufacturing defect.
              </li>
              <li>
                Return Pickup: For return assistance, please contact us at
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  sales@offroadacademies.com
                </a>
                , and our team will guide you through the process.{" "}
              </li>
              <li>
                Return Timeline: Products must be returned within 2-3 days from
                the date of delivery.
              </li>
              <li>
                Defective Items: If you've received a defective product, email
                images to{" "}
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  sales@offroadacademies.com
                </a>
                , and we’ll assist you promptly.
              </li>
              <li>
                Return Limit: Each product is eligible for a maximum of two
                returns. Beyond this, additional returns for that specific
                product will not be processed..
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
