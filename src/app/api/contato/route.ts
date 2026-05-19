import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const { nome, email, assunto, mensagem } = await request.json()

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Serviço de e-mail não configurado.' }, { status: 503 })
    }

    const resend = new Resend(apiKey)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@ibcl.com.br'
    const toEmail = process.env.RESEND_TO_EMAIL || 'secretaria@ibcl.com.br'

    await resend.emails.send({
      from: `IBCL Site <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Site IBCL] ${assunto || 'Nova mensagem'} - ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f5238;">Nova mensagem via site da IBCL</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px;">Nome:</td>
              <td style="padding: 8px;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">E-mail:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Assunto:</td>
              <td style="padding: 8px;">${assunto || 'Não especificado'}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border-color: #e1e3df;" />
          <h3 style="color: #404943;">Mensagem:</h3>
          <p style="color: #191c1a; line-height: 1.6;">${mensagem.replace(/\n/g, '<br>')}</p>
          <hr style="margin: 24px 0; border-color: #e1e3df;" />
          <p style="color: #707973; font-size: 12px;">
            Enviado pelo formulário de contato em ibcl.com.br
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/contato]', error)
    return NextResponse.json({ error: 'Erro interno. Tente novamente.' }, { status: 500 })
  }
}
