"use client"

import { useState } from "react"
import Image from "next/image"

const colors = [
  'bg-red-50',
  'bg-yellow-50',
  'bg-green-50',
]

export default function EditCard({ attractionsList, onSave, onDelete }) {
  const basePath = process.env.NODE_ENV === 'production'
    ? '/react-next-travel'
    : ''
  const [errors, setErrors] = useState({})
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({})
  const [deletingIds, setDeletingIds] = useState([])

  function handleEdit(attraction) {
    setEditingId(attraction.id)
    setFormData({
      ...attraction,
    })
  }

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSave() {
    if(!validate()) return
    onSave(formData)
    setEditingId(null)
    setErrors({})
  }

  function handleCancel() {
    setEditingId(null)
  }

  function handleDelete(id) {
    const confirmDelete = confirm('確定要移除這個收藏嗎？')
    if (!confirmDelete) return

    setDeletingIds((prev) => [...prev, id])

    setTimeout(() => {
      onDelete(id)

      setDeletingIds((prev) => prev.filter((item) => item !== id))
    }, 300) 
  }

  function validate() {
    const newErrors = {}
    console.log('判斷')
    // 名稱必填
    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = '景點名稱為必填'
    }
    console.log(formData.tel,'formData.tel')
    // 電話必填 + 格式
    if (!formData.tel || formData.tel.trim() === '') {
      newErrors.tel = '電話為必填'
    } else if (!/^[0-9#+-]+$/.test(formData.tel)) {
      newErrors.tel = '電話只能包含數字、+、-、#'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }
  return (
    <div className="grid md:grid-cols-3 md:gap-4 gap-2 grid-cols-1"> 
      {attractionsList.map((attraction) => {
        const isEditing = editingId === attraction.id

        return (
            <article
              key={attraction.id}
              className={`
                max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative
                transition-all duration-300
                ${
                  deletingIds.includes(attraction.id)
                    ? 'opacity-0 scale-95'
                    : 'opacity-100 scale-100'
                }
              `}
            >

            {isEditing ? (
              <div className="absolute top-10 right-2 z-20 flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm cursor-pointer"
                >
                  💾 儲存
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 px-2 py-1 rounded text-sm cursor-pointer"
                >
                  ❌
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleEdit(attraction)}
                className="absolute top-10 right-2 z-20 text-sm bg-green-100 px-2 py-1 rounded cursor-pointer"
              >
                📝 修改
              </button>
            )}
              <button
                onClick={() => handleDelete(attraction.id)}
                className="absolute top-2 right-2 z-20 text-sm bg-red-100 px-2 py-1 rounded cursor-pointer"
              >
                🗑️ 移除
              </button>

            <Image 
              width={200}
              height={200}
              className="w-full" 
              unoptimized
              src={attraction.images?.[0]?.src || `${basePath}/Bg_1280*400.png`}
              alt={attraction.name}
            />

            <div className="px-6 py-4">

              {/* 名稱 */}
              {isEditing ? (
                <>                
                <input
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="border p-1 w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                </>
              ) : (
                <div className="font-bold text-lg mb-2">
                  {attraction.name}
                </div>
              )}

              {isEditing ? (
                <>
                  <input
                    name="tel"
                    value={formData.tel || ''}
                    onChange={handleChange}
                    className={`border p-1 w-full ${
                      errors.tel ? 'border-red-500' : ''
                    }`}
                    placeholder="電話"
                  />
                  {errors.tel && (
                    <p className="text-red-500 text-sm">{errors.tel}</p>
                  )}
                </>
              ) : (
                <p className="text-gray-700 text-sm">
                  電話：{attraction.tel || '無'}
                </p>
              )}

              {/* 介紹 */}
              {isEditing ? (
                <textarea
                  name="introduction"
                  value={formData.introduction || ''}
                  onChange={handleChange}
                  className="border p-1 w-full"
                />
              ) : (
                <p className="text-gray-700 text-base h-[170px] overflow-hidden">
                  {attraction.introduction}
                </p>
              )}

              {/* 備註 */}
              {isEditing ? (
                <textarea
                  name="remind"
                  value={formData.remind || ''}
                  onChange={handleChange}
                  className="border p-1 w-full"
                />
              ) : (
                <p className="text-gray-700 text-base h-[170px] overflow-hidden">
                  備註：{attraction.remind}
                </p>
              )}
            </div>

            {/* 類別 */}
            <div className="px-4 pt-4 pb-2 flex flex-wrap">
              {attraction.category?.map((category, index)=>(
                <span 
                  key={`${category.name}-${index}`}
                  className={`inline-flex items-center rounded-md ${colors[index % colors.length]} px-2 py-1 text-xs font-medium text-gray-600`}
                >
                  #{category.name}
                </span>
              ))}
            </div>

          </article>
        )
      })}
    </div>
  )
}