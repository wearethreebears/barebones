import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Form from "@barebones/components/Form/Form.vue";

import FormLocal from "@barebones-local/Form/Form.parts";
const { parts } = FormLocal();


const defaultSlot = "Hello world";
const propsList = [
  {
    givenProps: {
      action: "/endpoint",
      method: "POST",
      encode: "DEFAULT"
    },
    expectedAnswers: {
      action: "/endpoint",
      method: "post",
      encode: "application/x-www-form-urlencoded",
    }
  },
  {
    givenProps: {
      action: "/endpoint",
      method: "GET",
      encode: "MEDIA"
    },
    expectedAnswers: {
      action: "/endpoint",
      method: "get",
      encode: "multipart/form-data",
    }
  }
]

allComponentPartClassesToDisplayCorrectly(Form, parts);

propsList.forEach((props) => {
  describe("Form", () => {
    let wrapper;
    beforeEach(async () => {
      wrapper = mount(Form, {
        props: props.givenProps,
        slots: {
          default: defaultSlot
        }
      });
    })

    it("renders properly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("displays the correct slot", () => {
      expect(wrapper.html()).contains(defaultSlot)
    });

    it("has the correct action", () => {
      expect(wrapper.attributes('action')).toBe(props.expectedAnswers.action);
    });

    it("has the correct method", () => {
      expect(wrapper.attributes('method')).toBe(props.expectedAnswers.method);
    });

    it("has the correct encoding", () => {
      expect(wrapper.attributes('enctype')).toBe(props.expectedAnswers.encode);
    });

  });
});
