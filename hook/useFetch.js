export async function useFetch(url) {
  try {
    const res = await fetch(
      `https://dashboard.sakirsyarian.my.id/api/${url}?populate[image][fields]=url`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function useFetchAll(url) {
  try {
    const res = await fetch(
      `https://dashboard.sakirsyarian.my.id/api/${url}?populate[image][fields]=url`,
      {
        next: { revalidate: 0 },
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataJson = await res.json();
    const dataSource = dataJson.data.map((el) => {
      const item = {
        ...el,
      };
      item.attributes.image = el.attributes.image.data.attributes.url;

      return item;
    });

    return {
      data: dataSource,
      meta: dataJson.meta,
    };
  } catch (error) {
    console.log(error);
  }
}
