import { QRCodeSVG } from "qrcode.react"
import { ComponentProps } from "react"

type QRCodeProps = ComponentProps<typeof QRCodeSVG>

const QRCode = (props: QRCodeProps) => {
  return <QRCodeSVG {...props} />
}

export default QRCode
