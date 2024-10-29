import '@contentstack/venus-components/build/main.css';

import { useCallback, useEffect, useState } from 'react';

import ContentstackAppSdk from '@contentstack/app-sdk';
import { TextInput } from '@contentstack/venus-components';

const CustomFieldExtension = () => {
  const [error, setError] = useState<any>(null);
  const [app, setApp] = useState({} as any);
  const [url, setUrl] = useState("");

  const initializeApp = useCallback(async () => {
    if (app) {
      const customField = await app?.location?.CustomField;
      const entry = customField?.entry;

      setUrl(entry.getData()?.url);
      customField.frame.updateHeight(0);

      entry.onChange((data: any) => {
        const url = constructUrl(data);
        setUrl(url);
        console.log("Changing URL : ", url);
        customField.field.setData(url);
        entry.getField("url")?.setData(url);
      });
    }
  }, [app]);

  const constructUrl = (data: any) => {
    console.log("data", data);
    const taxonomies = data.taxonomies || [];

    const productName = data?.title ?? "";
    let formattedProductName = productName
      .replace(/[\W_]+/g, "-")
      .split(" ")
      .join("-")
      .toLowerCase();
    if (formattedProductName[formattedProductName.length - 1] === "-") {
      formattedProductName = formattedProductName.slice(0, -1);
    }

    return `/${taxonomies
      .filter((t: any) => t.taxonomy_uid === "products")
      .map((t: any) => t.term_uid)
      .join("/")}/${formattedProductName}`;
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== "undefined" && self === top) {
      setError("Error");
    } else {
      ContentstackAppSdk.init().then((appSdk) => {
        setApp(appSdk);
        let customField = appSdk?.location?.CustomField;
        console.log("value", customField?.entry?.getData()?.url, customField?.entry?.getData()?.url);
        initializeApp();
      });
    }
  }, [initializeApp]);

  return error ? <h3>{error}</h3> : <TextInput type="text" disabled value={url} />;
};

export default CustomFieldExtension;
