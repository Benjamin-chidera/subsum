import { BsFilter } from "react-icons/bs";
import transactionHistoryData from "../../assets/data/transactionHistory";
import { useState } from "react";
import { FormatCurrency } from "../../assets/data/currency";
import initiated from "../../assets/images/auth/initiated.png";
import success from "../../assets/images/auth/success.png";
import failed from "../../assets/images/auth/failed.png";

interface Transaction {
  id: number;
  service: string;
  amount: number;
  totalAmount: number;
  status: string;
  paymentMethod: string;
  transactionNumber: string;
  phoneNumber: string;
  transactionDate: string;
}

const TransactionHistory = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortedTransactions, setSortedTransactions] = useState<Transaction[]>(
    transactionHistoryData
  );
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order: "highest" | "lowest") => {
    const sortedData = [...transactionHistoryData].sort((a, b) => {
      if (order === "highest") {
        return b.amount - a.amount;
      } else {
        return a.amount - b.amount;
      }
    });
    setSortedTransactions(sortedData);
    setSortOrder(order);
    setShowFilter(false);
  };

  return (
    <main>
      <section className="relative">
        <button
          className="flex items-center gap-2 text-[#6882B6] bg-[#F7F9FD] w-[190px] h-10 rounded-xl p-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <BsFilter size={20} />
          <p>Filter</p>
        </button>

        {showFilter && (
          <div className="bg-white shadow-lg p-3 w-[190px] absolute -bottom-17 border border-blue-400">
            <div className="flex flex-col gap-2">
              <button
                className={`hover:bg-gray-200 font-medium text-[16px] py-2 px-4 text-[#6882B6] ${
                  sortOrder === "highest" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSort("highest")}
              >
                Highest
              </button>
              <button
                className={`hover:bg-gray-200 font-medium text-[16px] py-2 px-4 text-[#6882B6] ${
                  sortOrder === "lowest" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSort("lowest")}
              >
                Lowest
              </button>
            </div>
          </div>
        )}
      </section>

      <section>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
          className=" overflow-x-scroll xl:overflow-hidden"
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Service
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Total Amount
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Payment Method
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Transaction No
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: "#6882B6",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <td
                  style={{
                    padding: "10px",
                    color: "#4C689E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  className="flex items-center gap-2"
                >
                  {transaction.status === "Initiated" && (
                    <img
                      src={initiated}
                      alt="service-status"
                      className="w-7 h-7"
                    />
                  )}

                  {transaction.status === "Successful" && (
                    <img
                      src={success}
                      alt="service-status"
                      className="w-7 h-7"
                    />
                  )}

                  {transaction.status === "Failed" && (
                    <img
                      src={failed}
                      alt="service-status"
                      className="w-7 h-7"
                    />
                  )}

                  <div>
                    <p>{transaction.service}</p>

                    <p className=" font-[400]">{transaction.phoneNumber}</p>
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px",
                    color: "#4C689E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  ₦{transaction.amount}
                </td>
                <td
                  style={{
                    padding: "10px",
                    color: "#4C689E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  ₦{transaction.totalAmount}
                </td>
                <td
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                  className={`${
                    transaction.status === "Initiated"
                      ? "text-[#FFB547]"
                      : transaction.status === "Successful"
                      ? "text-[#2DAE32]"
                      : transaction.status === "Failed"
                      ? "text-[#EE5D50]"
                      : "text-black"
                  }`}
                >
                  {transaction.status}
                </td>

                <td
                  style={{
                    padding: "10px",
                    color: "#4C689E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {transaction.paymentMethod}
                </td>
                <td
                  style={{
                    padding: "10px",
                    color: "#4C689E",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <p> {transaction.transactionNumber}</p>
                  <p className=" font-[400]">{transaction.transactionDate}</p>
                </td>
                <td
                  style={{
                    padding: "10px",

                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <button
                    style={{ padding: "5px 10px", cursor: "pointer" }}
                    className="text-[#4169E1] bg-[#EFF3FB] rounded-md"
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default TransactionHistory;
