import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Image from "@barebones/components/Image/Image.vue";

import ImageLocal from "@barebones-local/Image/Image.parts";
const { parts } = ImageLocal();


const propImage = {
  url: '/image.png',
  width: 400,
  height: 200,
  alt: 'Alt text'
};

allComponentPartClassesToDisplayCorrectly(Image, parts);

describe("Image", () => {
  let wrapper;
  let image;
  beforeEach(async () => {
    wrapper = mount(Image, {
      props: {
        image: propImage
      },
    });
    image = wrapper.find('img');
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the correct image data", async () => {
    expect(image.attributes('src')).toBe(propImage.url);
    expect(image.attributes('alt')).toBe(propImage.alt);
  });

  it("wrapper has the correct styles to hold shape", async () => {
    expect(wrapper.attributes('style')).toContain('padding-top: 50%');
  });

  it("the correct aspect ratio is calculated", async () => {
    expect(wrapper.vm.ratio(propImage.width, propImage.height)).toBe('2/1');
  });

});
