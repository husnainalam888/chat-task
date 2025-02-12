import { List } from "antd";
import { Check, Cross, CrossIcon, User2Icon, X } from "lucide-react";
import React from "react";

const InvitationsList = ({
  data = [],
  title,
  loading,
  onAccept,
  onDecline,
  type = "received",
}) => {
  return (
    <div className="rounded-lg p-2 flex-1">
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <List
        dataSource={data}
        renderItem={(item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md  transition mb-2"
          >
            <User2Icon
              size={40}
              className="text-white p-2 bg-gray-700 rounded-full"
            />

            <div className="flex-1">
              <h1 className="font-bold text-lg">
                {item?.team?.name || "Unknown Team"}
              </h1>
              <p className="text-gray-600">
                {type == "sent"
                  ? `You invited ${item?.receiver?.name || "Unknown User"} - ${
                      item?.receiver?.email
                    }`
                  : `You are invited by ${
                      item?.receiver?.name || "Unknown User"
                    }`}
              </p>
            </div>
            {type === "received" && item.status == "PENDING" && (
              <>
                <X
                  size={40}
                  onClick={() => onDecline(item)}
                  className="cursor-pointer hover:shadow-lg text-red-500 bg-red-200 rounded-full p-2"
                />
                <Check
                  size={40}
                  onClick={() => onAccept(item)}
                  className="cursor-pointer hover:shadow-lg text-green-500 bg-green-200  rounded-full p-2"
                />
              </>
            )}
            {(type === "sent" || item.status != "PENDING") && (
              <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg font-bold">
                {item.status}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InvitationsList;
