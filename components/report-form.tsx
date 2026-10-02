"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { ImagePlus, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ReportForm() {
  const [fileName, setFileName] = useState("")
  const [feedback, setFeedback] = useState("")

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file && file.size > 5 * 1024 * 1024) {
      event.target.value = ""
      setFileName("")
      setFeedback("O arquivo deve ter no máximo 5 MB.")
      return
    }
    setFeedback("")
    setFileName(file?.name ?? "")
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback(
      "Formulário validado. O envio real depende da integração com um serviço de atendimento.",
    )
    event.currentTarget.reset()
    setFileName("")
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="incident">Qual é o problema?</label>
        <select className="field-control" id="incident" name="incident" required defaultValue="">
          <option value="" disabled>Selecione o tipo de incidente</option>
          <option>Elevador fora de funcionamento</option>
          <option>Escada rolante fora de funcionamento</option>
          <option>Falta de sinalização</option>
          <option>Problemas no acesso</option>
          <option>Outro problema</option>
        </select>
      </div>
      <div className="field-group">
        <label htmlFor="station">Em qual estação?</label>
        <select className="field-control" id="station" name="station" required defaultValue="">
          <option value="" disabled>Selecione a estação</option>
          <option>Sé</option>
          <option>Jabaquara</option>
          <option>Paraíso</option>
          <option>Paulista</option>
          <option>Barra Funda</option>
          <option>Outra estação</option>
        </select>
      </div>
      <div className="field-group">
        <label htmlFor="description">Descrição (opcional)</label>
        <textarea
          className="field-control"
          id="description"
          name="description"
          placeholder="Conte mais detalhes sobre o que aconteceu..."
          maxLength={500}
        />
      </div>
      <div className="field-group">
        <label className="upload-field" htmlFor="evidence">
          <ImagePlus size={20} />
          <span>
            <strong>{fileName || "Adicionar foto (opcional)"}</strong>
            <small>PNG, JPG ou HEIC · máximo 5 MB</small>
          </span>
          <input
            accept="image/png,image/jpeg,image/heic"
            id="evidence"
            name="evidence"
            onChange={handleFileChange}
            type="file"
          />
        </label>
      </div>
      {feedback && <p className="form-feedback" role="status">{feedback}</p>}
      <Button className="submit-report" type="submit">
        <Send size={16} /> Enviar denúncia
      </Button>
    </form>
  )
}