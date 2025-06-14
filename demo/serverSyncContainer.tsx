/*********************************************** */
/** LIVE DEMO AREA BEGIN PLEASE REMOVE THIS CODE */
/*********************************************** */

import { useContext, useEffect, useState } from "react";
import { TextInput, View, Text } from "react-native";
import CustomPressable from "../components/customPressable";
import color from "../constants/color";
import { isValidString } from "../utility/inputValidation";
import { AppContext } from "../contexts/appContext";

export const defaultServerIp = "192.168.";
// Local IP Regex
const localIPRegex: RegExp =
  /^(10\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)|192\.168\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)|172\.(1[6-9]|2\d|3[0-1])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d))$/;
const errorMessageList = [
  "😜 Oops! That IP's as real as unicorns on the moon. Try again!",
  "🤖 Invalid IP detected. Initiating judgment... just kidding. Fix it, please 😅",
  "🧠 That IP is having an identity crisis. Give it something real!",
  "🚫 That's not how IPs work, friend. Want to try again like a pro?",
  "😵 That IP made our server laugh. Please input something that exists!",
  "🕵️‍♂️ IP address not found in this universe. Double-check and retry!",
  "🧙‍♂️ Not even Gandalf could route to that IP. Give it another shot!",
  "👾 Error 404: Your IP ran away from the server. Catch it and try again!",
];

// Pick randomly one message from error message list
function getRandomMessage(): string {
  const randomIndex = Math.floor(Math.random() * errorMessageList.length);
  return errorMessageList[randomIndex];
}

const isServerIpValid = (serverIp: string) =>
  isValidString(serverIp) &&
  serverIp !== defaultServerIp &&
  localIPRegex.test(serverIp);

export type NotificationMessageType = {
  visible: boolean;
  type?: "succ" | "err";
  message?: string;
};

const fetchWithTimeout = (url: string, timeout = 5000): Promise<Response> =>
  Promise.race([
    fetch(url),
    new Promise<Response>((_, reject) => setTimeout(() => reject(), timeout)),
  ]);

export const ServerSyncContainer = () => {
  const { serverConfig, isServerOnline } = useContext(AppContext);
  const [, setServer] = serverConfig;

  const [serverSyncVisible, setServerSyncVisible] = useState(false);
  const [serverIp, setServerIp] = useState<string>(defaultServerIp);
  const [notificationMessage, setNotificationMessage] =
    useState<NotificationMessageType>({
      visible: false,
    });
  const [serverIsAvailable, setServerIsAvailable] =
    useState<NotificationMessageType>({
      visible: false,
    });

  //** Hide notification after a X amount of time */
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationMessage({ visible: false });
    }, 5000); // 5 seconds

    // Cleanup
    return () => clearTimeout(timer);
  }, [notificationMessage]);

  //** Attempt to ping health endpoint */
  useEffect(() => {
    const pingServer = async () => {
      try {
        const response = await fetchWithTimeout(
          `http://${serverIp}:8080/health`
        );

        if (!response.ok) {
          setServerIsAvailable({
            visible: true,
            message: serverIsAvailable.message?.concat(
              "\nHealth endpoint not found."
            ),
            type: "err",
          });
        }

        const data = await response.json();

        if (!data?.message) {
          data.message = "No message from server.";
        }

        setServerIsAvailable({
          visible: true,
          message: serverIsAvailable.message?.concat(
            `\nConnected Successfully. ${data?.message}`
          ),
          type: "succ",
        });
      } catch (e) {
        console.log(e);
        setServerIsAvailable({
          visible: true,
          message: serverIsAvailable.message?.concat(
            "\nHealth endpoint not found."
          ),
          type: "err",
        });
      }
    };

    if (serverIsAvailable.visible && notificationMessage.type === "succ") {
      pingServer();
    }
  }, [notificationMessage]);

  return (
    <>
      <CustomPressable
        color={color.light.blue}
        text={"Sync Server"}
        onPress={() => {
          setServerSyncVisible((prev) => !prev);
        }}
      />
      {serverSyncVisible && (
        <>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: color.light.gray,
              borderRadius: 15,
              padding: 15,
              textAlign: "center",
            }}
            placeholder="192.168.xxx.xxx"
            keyboardType="numeric"
            defaultValue={defaultServerIp}
            onChangeText={(text) => setServerIp(text)}
          />

          <CustomPressable
            color={color.light.gray}
            text={"Apply"}
            onPress={() => {
              if (isServerIpValid(serverIp.trim())) {
                setNotificationMessage({
                  visible: true,
                  type: "succ",
                  message: "Server address successfully stored.",
                });

                // Set server IP in context
                // This will be used by the app to make API calls
                setServer(serverIp);

                setServerIsAvailable({
                  visible: true,
                  message: "Trying to ping server...",
                });
              } else {
                setNotificationMessage({
                  visible: true,
                  type: "err",
                  message: getRandomMessage(),
                });
              }
            }}
          />
          {notificationMessage.visible && (
            <View
              style={{
                backgroundColor:
                  notificationMessage.type === "succ" ? "lightgreen" : "pink",
                borderRadius: 10,
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text>{notificationMessage.message}</Text>
            </View>
          )}
          {serverIsAvailable && (
            <View style={{ paddingHorizontal: 10 }}>
              <Text>{serverIsAvailable.message}</Text>
            </View>
          )}
        </>
      )}
      {isServerOnline && (
        <>
          <CustomPressable
            color={color.light.warning}
            text={"Disconnect Server"}
            onPress={() => {
              setServer("");
              setServerIsAvailable({ visible: false });
            }}
          />
        </>
      )}
    </>
  );
};
/*********************************************** */
/** LIVE DEMO AREA END PLEASE REMOVE THIS CODE */
/*********************************************** */
