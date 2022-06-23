import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormError from "@barebones/components/FormError/FormError.vue";

import FormErrorLocal from "@barebones-local/FormError/FormError.parts";
const { parts } = FormErrorLocal();


const error = "Hello world";

allComponentPartClassesToDisplayCorrectly(FormError, parts);

describe("FormError", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormError, {
      props: {
        error
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct slot", () => {
    expect(wrapper.html()).contains(error)
  });

});
