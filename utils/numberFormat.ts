export interface NumberFormatOptions {
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

/** 为数据添加千位分隔符，便于报告阅读 */
export const formatThousands = (
  value: number | string,
  options: NumberFormatOptions = {}
): string => {
  const num = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(num)) return String(value);
  return num.toLocaleString('en-US', {
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 2,
  });
};
