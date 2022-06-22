import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Modal from "@barebones/components/Modal/Modal.vue";

import ModalLocal from "@barebones-local/Modal/Modal.parts";
const { parts } = ModalLocal();

const modalTitle = "Modal title";
const modalContent = "Modal content";

allComponentPartClassesToDisplayCorrectly(Modal, parts, ['BonesButton']);

describe("Modal", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Modal, {
      slots: {
        default: modalContent,
        title: modalTitle
      },
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
