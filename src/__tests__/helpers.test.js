/* eslint max-len: 0 */

import {
  abbr,
  sumChars,
  fetchImage,
  generateBackgroundStyle,
  generateBackgroundColor,
  getContainerStyle,
} from "../helpers";

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
    mockResponseObject = {
      _bodyBlob: {
        _data: {},
      },
      _bodyInit: {
        _data: {},
      },
      headers: {
        map: {
          "cache-control": "public, max-age=31536000",
          "connection": "keep-alive",
          "content-length": "271",
          "content-type": "image/png",
          "date": "Thu, 15 Aug 2024 18:10:00 GMT",
          "last-modified": "Tue, 13 Aug 2024 21:08:11 GMT",
          "server": "cloudflare",
          "x-powered-by": "WordOps",
        },
      },
      ok: true,
      status: 200,
      url: "https://dummyimage.com/100x100/000/fff",
    };

    const p = new Promise((resolve, reject) => {
      resolve(mockResponseObject);
    });
    return p;
  });
});

describe("test abbr function normally", () => {
  it("should return my initials", () => {
    expect(abbr("Bhav Beri")).toMatchSnapshot();
  });
});

describe("test abbr function when name starts with +", () => {
  it("should return my initials", () => {
    expect(abbr("+Bhav Beri")).toMatchSnapshot();
  });
});

describe("test abbr function when name is invalid", () => {
  it("should return my initials", () => {
    expect(abbr("!@# #!$#")).toMatchSnapshot();
  });
});

describe("test sumChars function", () => {
  it("should return the same sum", () => {
    expect(sumChars("Bhav Beri")).toMatchSnapshot();
  });
});

describe("test fetchImage function on an non-image URL", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      mockResponseObject = {
        _bodyBlob: {
          _data: {},
        },
        _bodyInit: {
          _data: {},
        },
        headers: {
          map: {
            "connection": "keep-alive",
            "content-type": "text/html",
            "date": "Thu, 15 Aug 2024 18:10:00 GMT",
            "last-modified": "Tue, 13 Aug 2024 21:08:11 GMT",
            "server": "Github.com",
          },
        },
        ok: true,
        status: 200,
        url: "https://github.com/bhavberi/react-native-user-avatar/",
      };

      const p = new Promise((resolve, reject) => {
        resolve(mockResponseObject);
      });
      return p;
    });
  });

  it("calls the non-image url and returns false", async () => {
    jest.useFakeTimers();
    fetchImage("https://github.com/bhavberi/react-native-user-avatar/").then(
      (res) => {
        expect(res).toBe(false);
      },
    );
  });

  it("calls the non-image url with ignoreImageTypeCheck and returns true", async () => {
    jest.useFakeTimers();
    fetchImage(
      "https://github.com/bhavberi/react-native-user-avatar/",
      {},
      true,
    ).then((res) => {
      expect(res).toBe(true);
    });
  });
});

describe("test fetchImage function on an invalid URL", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      mockResponseObject = {
        _bodyBlob: {
          _data: {},
        },
        _bodyInit: {
          _data: {},
        },
        headers: {
          map: {
            "connection": "keep-alive",
            "content-type": "text/html",
            "date": "Thu, 15 Aug 2024 18:10:00 GMT",
            "last-modified": "Tue, 13 Aug 2024 21:08:11 GMT",
            "server": "Github.com",
          },
        },
        ok: false,
        status: 404,
        url: "https://github.com/bhavberi/react-native-user-avatara/",
      };

      const p = new Promise((resolve, reject) => {
        resolve(mockResponseObject);
      });
      return p;
    });
  });

  it("calls the invalid image url and returns false", async () => {
    jest.useFakeTimers();
    fetchImage("https://github.com/bhavberi/react-native-user-avatara/").then(
      (res) => {
        expect(res).toBe(false);
      },
    );
  });
});

describe("test generateBackgroundStyle function", () => {
  it("should return the same sum", () => {
    expect(
      generateBackgroundStyle("Bhav Beri", null, [
        "#2ecc71",
        "#3498db",
        "#8e44ad",
        "#e67e22",
        "#e74c3c",
        "#1abc9c",
        "#2c3e50",
      ]),
    ).toMatchSnapshot();
  });
});

describe("test generateBackgroundStyle function", () => {
  it("should return the same sum", () => {
    expect(
      generateBackgroundStyle("Bhav Beri", "#2ecc71", [
        "#2ecc71",
        "#3498db",
        "#8e44ad",
        "#e67e22",
        "#e74c3c",
        "#1abc9c",
        "#2c3e50",
      ]),
    ).toMatchSnapshot();
  });
});

describe("test generateBackgroundColor function", () => {
  it("should return the same sum", () => {
    expect(
      generateBackgroundColor("Bhav Beri", null, [
        "#2ecc71",
        "#3498db",
        "#8e44ad",
        "#e67e22",
        "#e74c3c",
        "#1abc9c",
        "#2c3e50",
      ]),
    ).toMatchSnapshot();
  });
});

describe("test generateBackgroundColor function", () => {
  it("should return the same sum", () => {
    expect(
      generateBackgroundColor("Bhav Beri", "#2ecc71", [
        "#2ecc71",
        "#3498db",
        "#8e44ad",
        "#e67e22",
        "#e74c3c",
        "#1abc9c",
        "#2c3e50",
      ]),
    ).toMatchSnapshot();
  });
});

describe("test getContainerStyle function", () => {
  it("should return the same sum", () => {
    jest.useFakeTimers();
    expect(
      getContainerStyle(32, "https://dummyimage.com/100x100/000/fff", 64),
    ).toMatchSnapshot();
  });
});
