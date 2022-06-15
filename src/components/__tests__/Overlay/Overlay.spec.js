import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Overlay from "@barebones/components/Overlay/Overlay.vue";

import OverlayLocal from "@barebones-local/Overlay/Overlay.parts";
const { parts } = OverlayLocal();

allComponentPartClassesToDisplayCorrectly(Overlay, parts);

const defaultSlot = "Hello world";

describe("Overlay", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Overlay, {
      slots: {
        default: defaultSlot
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct slot", () => {
    expect(wrapper.find('[data-part="overlayInner"]').html()).contains(defaultSlot)
  });

});
