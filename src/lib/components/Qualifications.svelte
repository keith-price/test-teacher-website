<script lang="ts">
	import { teacher } from '$lib/data/teacher';
</script>

<section class="qualifications section section--alt" id="qualifications">
	<div class="container">
		<div class="qualifications__layout">
			<div class="qualifications__certs">
				<span class="section-label">Qualifications</span>
				<h2 class="section-title">Certifications</h2>

				<div class="qualifications__list">
					{#each teacher.certifications as cert}
						<div class="qualifications__item">
							<div class="qualifications__item-header">
								<h3 class="qualifications__item-name">{cert.name}</h3>
								{#if cert.verified}
									<span class="qualifications__verified" title="Verified">✓ Verified</span>
								{/if}
							</div>
							<div class="qualifications__item-meta">
								<span>{cert.year}</span>
								{#if cert.hours}
									<span class="qualifications__dot">·</span>
									<span>{cert.hours}-hour course</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="qualifications__specialties">
				<span class="section-label">Specialties</span>
				<h2 class="section-title">Areas of Focus</h2>

				<div class="qualifications__tags">
					{#each teacher.specialties as specialty}
						<span class="qualifications__tag">{specialty}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.qualifications__layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-16);
		align-items: start;
	}

	.qualifications__list {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		margin-top: var(--space-8);
	}

	.qualifications__item {
		padding: var(--space-5) var(--space-6);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: border-color var(--transition-fast);
	}

	.qualifications__item:hover {
		border-color: var(--color-accent-light);
	}

	.qualifications__item-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		margin-bottom: var(--space-1);
	}

	.qualifications__item-name {
		font-size: var(--font-size-base);
		font-weight: var(--font-semibold);
		color: var(--color-text);
	}

	.qualifications__verified {
		font-size: var(--font-size-xs);
		font-weight: var(--font-semibold);
		color: var(--color-accent);
		background: var(--color-accent-soft);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-full);
		white-space: nowrap;
	}

	.qualifications__item-meta {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.qualifications__dot {
		color: var(--color-border);
	}

	.qualifications__tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-8);
	}

	.qualifications__tag {
		display: inline-block;
		padding: var(--space-3) var(--space-5);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-full);
		font-size: var(--font-size-sm);
		font-weight: var(--font-medium);
		color: var(--color-text);
		transition: all var(--transition-fast);
	}

	.qualifications__tag:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
		background: var(--color-accent-soft);
	}

	@media (max-width: 768px) {
		.qualifications__layout {
			grid-template-columns: 1fr;
			gap: var(--space-12);
		}
	}
</style>
