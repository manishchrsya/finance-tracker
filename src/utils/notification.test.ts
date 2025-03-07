import { Notification } from "./notification"
import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";

// mock the toast function

jest.mock("react-toastify", () => ({
    toast: {
        success: jest.fn(),
        info: jest.fn(),
        error: jest.fn(),
        warning: jest.fn(),
    }
}))

describe("testing", () => {

    // case one where success is being tested.

    test("testing success", () => {
        const { result } = renderHook(() => Notification());
        result.current.successNotification("success")
        expect(toast.success).toHaveBeenCalledWith("success")
    })
    // case one where success is being tested.

    test("testing warning", () => {
        const { result } = renderHook(() => Notification());
        result.current.warningNotification("warning")
        expect(toast.warning).toHaveBeenCalledWith("warning")
    })// case one where success is being tested.

    test("testing info", () => {
        const { result } = renderHook(() => Notification());
        result.current.infoNotification("info")
        expect(toast.info).toHaveBeenCalledWith("info")
    })// case one where success is being tested.

    test("testing error", () => {
        const { result } = renderHook(() => Notification());
        result.current.errorNotification("error")
        expect(toast.error).toHaveBeenCalledWith("error")
    })

})